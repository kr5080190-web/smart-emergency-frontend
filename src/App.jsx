import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SOS from "./pages/SOS";
import Dashboard from "./pages/Dashboard";
import LiveMap from "./pages/LiveMap";
import Architecture from "./pages/Architecture";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<LiveMap />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;