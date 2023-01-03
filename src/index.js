import React from "react";
import ReactDOM from "react-dom/client";
import { EthereumClient, modalConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, goerli } from "wagmi/chains";

import App from "./App";

import "./assets/css/index.css";
import "./assets/css/bootstrap.min.css"
import "./assets/css/augmented-ui.min.css"


const chains = [mainnet, goerli];

// Wagmi client
const { provider, webSocketProvider } = configureChains(chains, [
  publicProvider(),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "Woolball Woolballers", chains }),
  provider,
  webSocketProvider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
    <Web3Modal ethereumClient={ethereumClient} />
  </React.StrictMode>
);
