import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientDashboard from "./pages/ClientDashboard";
import DeveloperDashboard from "./pages/DeveloperDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/developer" element={<DeveloperDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
