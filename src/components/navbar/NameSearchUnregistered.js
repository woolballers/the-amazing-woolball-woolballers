import WoolName from "components/woolName";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import {
  WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
  WOOLBALL_CONTRACT_CHAIN_ID,
} from "../../constants/contract";
import woolballRegistrarABI from "../../contracts/woolballRegistrarABI.json";
import { ethers } from "ethers";

const ONE_YEAR_EXPIRY = 60 * 60 * 24 * 365;

export default function NameSearchUnregistered({ searchedName }) {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
    abi: woolballRegistrarABI,
    functionName: "register",
    args: [searchedName, address, ONE_YEAR_EXPIRY],
    enabled: Boolean(searchedName),
    chainId: WOOLBALL_CONTRACT_CHAIN_ID,
    overrides: {
      value: ethers.utils.parseEther("0.01"),
    },
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <>
      <WoolName name={searchedName} />
      &nbsp;is unregistered{" "}
      <button className="btn btn-warning" onClick={() => write()}>
        Register
      </button>
    </>
  );
}
