import { EthereumClient, modalConnectors } from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, goerli, hardhat } from "wagmi/chains";

// todo add correct chains
// const chains = [mainnet, goerli, hardhat];
const chains = [hardhat];

// Wagmi client
const { provider, webSocketProvider } = configureChains(chains, [
  publicProvider(),
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "Woolball Woolballers", chains }),
  provider,
  webSocketProvider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);
