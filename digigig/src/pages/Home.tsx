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
      <div className="app-container bg-black text-white min-h-screen px-6 py-10">
        <motion.section
          className="hero text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
            DigiGig: Proof-of-Work for Freelancers
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Showcase your verified freelance journey on-chain.
          </p>
          <button
            className="btn bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300"
            onClick={() => setStarted(true)}
          >
            Get Started
          </button>
        </motion.section>

        {started && addr && (
          <div className="mt-8 text-center">
            <p className="text-green-400 font-mono mb-4">
              ✅ Connected: {addr.slice(0, 6)}...{addr.slice(-4)}
            </p>
            <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:gap-6">
              <button
                className="btn bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300"
                onClick={() => nav("/developer")}
              >
                Freelancer Dashboard
              </button>
              <button
                className="btn bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300"
                onClick={() => nav("/client")}
              >
                Client Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

