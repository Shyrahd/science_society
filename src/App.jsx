import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Notfound from "./pages/Notfound";
import Profil from "./pages/Profil";
import Lamar from "./pages/Lamar";
import Jadwal from "./pages/Jadwal";
import Dashboard from "./management/Dashboard";
import Face from "./Face";
import AdmProfile from "./management/AdmProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Face />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Lamar" element={<Lamar />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AdmProfile" element={<AdmProfile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
