import SingleRegisteredName from "./SingleRegisteredName";
import { useContractRead, useContractReads } from "wagmi";
import {
  WOOLBALL_CONTRACT_ADDRESS,
  WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
  WOOLBALL_CONTRACT_CHAIN_ID,
} from "constants/contract";
import woolballABI from "contracts/woolballABI.json";
import woolballRegistrarABI from "contracts/woolballRegistrarABI.json";
import { useState } from "react";

const woolballContract = {
  address: WOOLBALL_CONTRACT_ADDRESS,
  abi: woolballABI,
  chainId: WOOLBALL_CONTRACT_CHAIN_ID,
};

const woolballRegistrarContract = {
  address: WOOLBALL_REGISTRAR_CONTRACT_ADDRESS,
  abi: woolballRegistrarABI,
  chainId: WOOLBALL_CONTRACT_CHAIN_ID,
};

const LOADING_STAGE = {
  DONE: 0,
  LOADING_LEN: 1,
  LOADING_NAME_IDS: 2,
  LOADING_NAMES: 3,
};

export default function RegisteredNames({ setSelectedName, selectedName }) {
  const [namesLength, setNamesLength] = useState(0);
  const [isLoading, setIsLoading] = useState(LOADING_STAGE.LOADING_LEN);
  const [nameIds, setNameIds] = useState([]);
  const [registeredNames, setRegisteredNames] = useState([]);

  const contractReadNamesLength = useContractRead({
    ...woolballContract,
    functionName: "getNamesLen",
    onSuccess(data) {
      setNamesLength(data.toNumber());
      setIsLoading(LOADING_STAGE.LOADING_NAME_IDS);
    },
  });

  const contractReadNameIds = useContractReads({
    contracts:
      (isLoading === LOADING_STAGE.LOADING_NAME_IDS &&
        namesLength > 0 &&
        [...Array(namesLength).keys()].map((val) => {
          return { ...woolballContract, functionName: "arrNames", args: [val] };
        })) ||
      [],
    enabled: isLoading === LOADING_STAGE.LOADING_NAME_IDS && namesLength > 0,

    onSuccess(data) {
      setNameIds(data);
      setIsLoading(LOADING_STAGE.LOADING_NAMES);
    },
  });

  const contractReadNames = useContractReads({
    contracts:
      (isLoading === LOADING_STAGE.LOADING_NAMES &&
        nameIds.map((val) => {
          return {
            ...woolballRegistrarContract,
            functionName: "idToNames",
            args: [val],
          };
        })) ||
      [],
    enabled: isLoading === LOADING_STAGE.LOADING_NAMES,
    onSuccess(data) {
      setIsLoading(LOADING_STAGE.DONE);
      setRegisteredNames(data);
    },
  });

  return (
    <>
      <div
        className="names-box"
        data-augmented-ui="tl-2-round-inset tr-2-round-inset br-2-scoop-inset bl-2-scoop-xy both"
      >
        <h3 className="text-center GrislyBeast"> Registered Names </h3>
        {isLoading === LOADING_STAGE.DONE &&
          registeredNames.map((name) => (
            <SingleRegisteredName
              key={name}
              name={name}
              isSelected={selectedName === name}
              setSelectedName={setSelectedName}
            />
          ))}

        {isLoading !== LOADING_STAGE.DONE && <>Loading...</>}
      </div>
      &nbsp;
      <div>
        <h3> Woolball (All Links) </h3>
      </div>
    </>
  );
}
