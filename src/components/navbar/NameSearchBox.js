import { useContractRead } from "wagmi";
import {
  WOOLBALL_CONTRACT_ADDRESS,
  WOOLBALL_CONTRACT_CHAIN_ID,
} from "../../constants/contract";
import woolballABI from "../../contracts/woolballABI.json";
import { getNameId } from "../../utils/woolball";
import NameSearchRegistered from "./NameSearchRegistered";
import NameSearchUnregistered from "./NameSearchUnregistered";
import { useEffect, useState } from "react";

export default function NameSearchBox({ searchTerm, setChoosenName }) {
  const [fetchEnabled, setFetchEnabled] = useState(false);
  const [tokenData, setTokenData] = useState({});

  const nameId = getNameId(searchTerm);
  let nameRegistered = true;

  useEffect(() => {
    setFetchEnabled(true);
  }, [searchTerm]);

  const contractRead = useContractRead({
    address: WOOLBALL_CONTRACT_ADDRESS,
    abi: woolballABI,
    functionName: "ownerOf",
    args: [nameId],
    chainId: WOOLBALL_CONTRACT_CHAIN_ID,
    enabled: fetchEnabled,
    onSettled() {
      setFetchEnabled(false);
    },
    onSuccess(data) {
      setTokenData({ owner: data });
    },
  });

  if (contractRead.isLoading) return <div>Loading...</div>;

  if (contractRead.isError) {
    if (contractRead.error.reason === "ERC721: invalid token ID") {
      nameRegistered = false;
    } else {
      return <div>Error: {contractRead.error.reason}</div>;
    }
  }

  return (
    <nav className="navbar">
      <div className="w-100" id="searchResults">
        <div className="card card-body flex-row">
          {nameRegistered && (
            <NameSearchRegistered
              searchedName={searchTerm}
              tokenData={tokenData}
              setChoosenName={setChoosenName}
            />
          )}
          {!nameRegistered && (
            <NameSearchUnregistered
              searchedName={searchTerm}
              setChoosenName={setChoosenName}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
