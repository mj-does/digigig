import { useState } from "react";

const tabs = ["Available Freelancers", "Sent Requests", "Projects Received"];

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
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

      {/* Main Section */}
      <main className="flex-1 p-10">
        {activeTab === 0 && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Available Freelancers</h2>
            <div className="space-y-4">
              {[
                "0xa1...5678",
                "0xb2...7890",
                "0xc3...90ab",
                "0xd4...abcd"
              ].map((addr, i) => (
                <div
                  key={i}
                  className="bg-gray-800 px-4 py-3 rounded-md border border-yellow-500 text-yellow-300 font-mono"
                >
                  {addr}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Sent Requests</h2>
            <table className="w-full text-left border-separate border-spacing-y-3">
              <thead>
                <tr className="text-yellow-400">
                  <th>Title</th>
                  <th>Freelancer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr><td>Logo Design</td><td>0xa1...5678</td><td>Pending</td></tr>
                <tr><td>Website Build</td><td>0xb2...7890</td><td>Declined</td></tr>
                <tr><td>App UI</td><td>0xc3...90ab</td><td>Received</td></tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === 2 && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Projects Received</h2>
            <div className="bg-gray-800 border border-yellow-500 p-6 rounded-xl max-w-md">
              <p className="mb-2"><strong>Title:</strong> Logo Design</p>
              <p className="mb-2"><strong>From:</strong> 0xa1...5678</p>
              <p className="mb-4">
                <strong>Work:</strong>{" "}
                <a href="#" className="text-yellow-400 underline">
                  View File
                </a>
              </p>
              <div className="flex gap-4">
                <button className="bg-green-500 px-4 py-2 rounded text-white">Approve</button>
                <button className="bg-white text-black px-4 py-2 rounded">Give Feedback</button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ClientDashboard;

