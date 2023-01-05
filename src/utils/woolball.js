import { ethers } from "ethers";

export function getNameId(name) {
  return ethers.utils.sha256(ethers.utils.toUtf8Bytes(name));
}
