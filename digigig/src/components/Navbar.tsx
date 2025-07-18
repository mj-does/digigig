import WalletConnect from "./WalletConnect";

export default function Navbar({
  onAddress,
}: {
  onAddress: (addr: string) => void;
}) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#111" }}>
      <h1 style={{ color: "yellow" }}>● DigiGig</h1>
      <WalletConnect onConnect={onAddress} />
    </nav>
  );
}
