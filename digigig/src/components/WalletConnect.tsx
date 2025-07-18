import { useEffect, useState } from "react";
import { switchToSepolia } from "../contracts/switchNetwork";

export default function WalletConnect({
  onConnect,
}: {
  onConnect: (addr: string) => void;
}) {
  const [account, setAccount] = useState<string | null>(null);

  const connect = async () => {
    await switchToSepolia();
    const accs = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accs[0]);
    onConnect(accs[0]);
  };

  useEffect(() => {
    window.ethereum?.on("accountsChanged", (accs: string[]) => {
      setAccount(accs[0] || null);
      if (accs[0]) onConnect(accs[0]);
    });
  }, []);

  return account ? (
    <div>Connected: {account.slice(0, 6)}...{account.slice(-4)}</div>
  ) : (
    <button onClick={connect}>Connect Wallet</button>
  );
}
