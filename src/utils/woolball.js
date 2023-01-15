import { ethers } from "ethers";

export function getNameId(name) {
  return ethers.utils.sha256(ethers.utils.toUtf8Bytes(name));
}

export function getLinkId(nameId1, nameId2) {
  const linkId = ethers.BigNumber.from(
    ethers.utils.soliditySha256(["uint256", "uint256"], [nameId1, nameId2])
  );
  return linkId;
}
