import React from "react";
import ReactDOM from "react-dom/client";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { wagmiClient, ethereumClient } from "./components/connect/client";

import App from "./App";

import "./assets/css/index.css";
import "./assets/css/augmented-ui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// bootstrap JS, consider changing to import only the functionality we use
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
    <Web3Modal ethereumClient={ethereumClient} />
  </React.StrictMode>
);
