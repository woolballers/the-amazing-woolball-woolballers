import SingleRegisteredName from "./SingleRegisteredName";
import { useContractRead, useContractReads } from "wagmi";
import {
  WOOLBALL_CONTRACT_ADDRESS,
  WOOLBALL_CONTRACT_CHAIN_ID,
} from "constants/contract";
import woolballABI from "contracts/woolballABI.json";
import { useState } from "react";

const woolballContract = {
  address: WOOLBALL_CONTRACT_ADDRESS,
  abi: woolballABI,
  chainId: WOOLBALL_CONTRACT_CHAIN_ID,
};

export default function RegisteredNames({ setSelectedName, selectedName }) {
  const [namesLength, setNamesLength] = useState(0);
  const [isLoadingLen, setIsLoadingLen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const contractReadNamesLength = useContractRead({
    ...woolballContract,
    functionName: "getNamesLen",

    onSettled() {
      setIsLoadingLen(false);
    },
    onSuccess(data) {
      console.log("contractReadNamesLength", data);
      setNamesLength(data.toNumber());
    },
  });

  console.log(
    "array of indexes",
    [...Array(namesLength).keys()].map((val) => {
      return { ...woolballContract, functionName: "arrNames", args: [val] };
    })
  );

  console.log("enabled", isLoadingLen === false && namesLength > 0);
  const contractReadNames = useContractReads({
    contracts:
      (isLoadingLen === false &&
        namesLength > 0 &&
        [...Array(namesLength).keys()].map((val) => {
          return { ...woolballContract, functionName: "arrNames", args: [val] };
        })) ||
      [],
    enabled: isLoadingLen === false && namesLength > 0,
    onSettled() {
      setIsLoading(false);
    },
    onSuccess(data) {
      console.log("contractReadNames", data);
    },
  });

  const nameStyle = (name) => {
    if (name !== selectedName) return "btn bg-transparent";
    else return "btn bg-transparent border border-4 border-primary";
  };

  return (
    <>
      <div
        className="names-box"
        data-augmented-ui="tl-2-round-inset tr-2-round-inset br-2-scoop-inset bl-2-scoop-xy both"
      >
        <h3 className="text-center GrislyBeast"> Registered Names </h3>
        {["tomlightning", "ginbasil", "scalo"].map((name) => (
          <SingleRegisteredName
            key={name}
            name={name}
            nameStyle={nameStyle}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
          />
        ))}
      </div>
      &nbsp;
      <div>
        <h3> Woolball (All Links) </h3>
      </div>
    </>
  );
}
