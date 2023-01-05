import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Profile() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return <button className="btn btn-outline-success ms-auto" onClick={() => disconnect()}>Disconnect</button>;
  else
    return <button className="btn btn-outline-success ms-auto" onClick={() => connect()}>Connect Wallet</button>;
}
