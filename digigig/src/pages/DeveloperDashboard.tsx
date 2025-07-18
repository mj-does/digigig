import { useState } from "react";

const tabs = ["My Projects", "Upload Work", "Requests", "Submitted Work"];

const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-60 bg-gray-900 p-4">
        <img src="/ethereum-logo.png" className="w-10 mx-auto mb-6" alt="logo" />
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`py-2 px-4 cursor-pointer rounded-md mb-2 ${
              i === activeTab ? "bg-green-700 text-white" : "text-yellow-400"
            }`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </div>
        ))}
      </aside>

      <main className="flex-1 p-10">
        {activeTab === 0 && (
          <>
            <h2 className="text-2xl text-yellow-400 font-bold mb-6">My Projects</h2>
            <ul className="space-y-4">
              <li className="border border-yellow-400 p-4 rounded">Project: Website Redesign</li>
              <li className="border border-yellow-400 p-4 rounded">Project: Tokenomics Audit</li>
            </ul>
          </>
        )}

        {activeTab === 1 && (
          <>
            <h2 className="text-2xl text-yellow-400 font-bold mb-6">Upload Work to IPFS</h2>
            <form className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 rounded border border-yellow-400 mb-4 bg-black text-white"
              />
              <input
                type="file"
                className="w-full p-2 rounded border border-yellow-400 mb-4 bg-black text-white"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
                Upload & Submit
              </button>
            </form>
          </>
        )}

        {activeTab === 2 && (
          <>
            <h2 className="text-2xl text-yellow-400 font-bold mb-6">Project Requests</h2>
            <div className="bg-gray-800 p-6 rounded-xl border border-yellow-400 w-full max-w-md">
              <p className="mb-2"><strong>Title:</strong> Design a Logo</p>
              <p className="mb-4"><strong>From:</strong> 0xb4...7890</p>
              <div className="flex gap-4">
                <button className="bg-green-500 px-4 py-2 rounded text-white">Accept</button>
                <button className="bg-red-500 px-4 py-2 rounded text-white">Decline</button>
              </div>
            </div>
          </>
        )}

        {activeTab === 3 && (
          <>
            <h2 className="text-2xl text-yellow-400 font-bold mb-6">Submitted Work</h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center border border-yellow-400 px-4 py-2 rounded">
                <span>UI Design Mockup</span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded">Pending</span>
              </li>
              <li className="flex justify-between items-center border border-yellow-400 px-4 py-2 rounded">
                <span>Pitch Deck Slides</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded">Approved</span>
              </li>
            </ul>
          </>
        )}
      </main>
    </div>
  );
};

export default DeveloperDashboard;

