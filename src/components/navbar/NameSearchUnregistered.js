import WoolName from "components/woolName";
import { useContractWrite, useWaitForTransaction, useAccount } from "wagmi";
import {
  WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
  WOOLBALL_CONTRACT_CHAIN_ID,
} from "../../constants/contract";
import woolballRegistrarABI from "../../contracts/woolballRegistrarABI.json";
import { ethers } from "ethers";
import ChooseNameBtn from "./ChooseNameBtn";

const ONE_YEAR_EXPIRY = 60 * 60 * 24 * 365;

export default function NameSearchUnregistered({
  searchedName,
  setChoosenName,
}) {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, error, isError, write } = useContractWrite({
    address: WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
    abi: woolballRegistrarABI,
    functionName: "register",
    args: [searchedName, address, ONE_YEAR_EXPIRY],
    enabled: Boolean(searchedName),
    chainId: WOOLBALL_CONTRACT_CHAIN_ID,
    mode: "recklesslyUnprepared",
    overrides: {
      value: ethers.utils.parseEther("0.01"),
    },
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <>
      <WoolName name={searchedName} />
      {!isSuccess && <>&nbsp;is unregistered </>}
      {isSuccess && !isLoading && (
        <>
          &nbsp;is registered{" "}
          <ChooseNameBtn
            setChoosenName={setChoosenName}
            searchedName={searchedName}
          />
        </>
      )}
      {isLoading && <span className="text-warning">Registering...</span>}
      {!isLoading && !isSuccess && (
        <button className="btn btn-warning" onClick={() => write()}>
          Register
        </button>
      )}
    </>
  );
}
