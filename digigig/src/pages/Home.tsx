import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "../styles.css";

export default function Home() {
  const [addr, setAddr] = useState("");
  const [started, setStarted] = useState(false);
  const nav = useNavigate();

  return (
    <>
      <Navbar onAddress={setAddr} />
      <div className="app-container">
        <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>DigiGig: Proof-of-Work for Freelancers</h1>
          <p>Showcase your verified freelance journey on-chain.</p>
          <button className="btn" onClick={() => setStarted(true)}>Get Started</button>
        </motion.section>

        {started && addr && (
          <div style={{ marginTop: 20 }}>
            <p>✅ Connected: {addr.slice(0, 6)}...{addr.slice(-4)}</p>
            <button className="btn" onClick={() => nav("/developer")}>
              Freelancer Dashboard
            </button>
            <button className="btn" onClick={() => nav("/client")}>
              Client Dashboard
            </button>
          </div>
        )}
      </div>
    </>
  );
}
