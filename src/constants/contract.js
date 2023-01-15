import woolballABI from "../contracts/woolballABI.json";
import woolballRegistrarABI from "../contracts/woolballRegistrarABI.json";
import threadKvABI from "../contracts/threadKvABI.json";

export const WOOLBALL_CONTRACT_ADDRESS =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const WOOLBALL_REGISTRAR_CONTRACT_ADDRESS =
  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const WOOLBALL_CONTRACT_CHAIN_ID = 31_337;

export const THREADS_CONTRACT_ADDRESS = {
  friendship: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  collaborated: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
  community: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
};

export const woolballContract = {
  address: WOOLBALL_CONTRACT_ADDRESS,
  abi: woolballABI,
  chainId: WOOLBALL_CONTRACT_CHAIN_ID,
};

export const woolballRegistrarContract = {
  address: WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
  abi: woolballRegistrarABI,
  chainId: WOOLBALL_CONTRACT_CHAIN_ID,
};

export const getThreadContract = (threadName) => {
  return {
    address: THREADS_CONTRACT_ADDRESS[threadName],
    abi: threadKvABI,
    chainId: WOOLBALL_CONTRACT_CHAIN_ID,
  };
};

export const threadsFriendshipContract = getThreadContract("friendship");
export const threadsCollaboratedContract = getThreadContract("collaborated");
export const threadsCommunityContract = getThreadContract("community");
