import React from "react";
import { useContractRead } from "wagmi";
import {
  woolballContract,
  THREADS_CONTRACT_ADDRESS
} from "constants/contract";
import woolballABI from "contracts/woolballABI.json";
import { getNameId, getLinkId } from "utils/woolball";

export default function useRelationshipCreate(linker, linkee, relationship, enabled) {
  const [fetchEnabled, setFetchEnabled] = React.useState(false);
  const [tokenData, setTokenData] = React.useState({});


  const threadAddressContract = THREADS_CONTRACT_ADDRESS[relationship]
  const linkId = getLinkId(getNameId(linker), getNameId(linkee));

  /*
      function newThread(
        uint256 _linkID,
        IThreadContent _threadContent,
        bool _closable,
        bool _transfarable
    ) external {*/

  React.useEffect(() => {
    setFetchEnabled(true);
  }, [searchTerm]);

  const contractRead = useContractRead({
    ...woolballContract,
    functionName: "newThread",
    args: [linkId, threadAddressContract, true, true],
    enabled: fetchEnabled,
    onSettled() {
      setFetchEnabled(false);
    },
    onSuccess(data) {
      setTokenData({ owner: data });
    },
  });

  return { contractRead.isError, contractRead.isLoading, tokenData };
}
