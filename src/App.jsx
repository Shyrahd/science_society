import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Notfound from "./pages/Notfound";
import Profil from "./pages/Profil";
import Lamar from "./newUser/Lamar";
import Jadwal from "./pages/Jadwal";
import Dashboard from "./management/Dashboard";
import Face from "./Face";
import AdmProfile from "./management/AdmProfile";
import LandPage from "./newUser/LandPage";
import UserProfile from "./newUser/userProfile";
import Pelatihan from "./newUser/Pelatihan";
import DaftarAkun from "./newUser/DaftarAkun";
import Pelamar from "./management/Pelamar";
import Interview from "./management/Interview";
import DaftarMentor from "./management/DaftarMentor";
import TesLanjutan from "./management/TesLanjutan";

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
          <Route path="/Daftar" element={<DaftarAkun />} />
          <Route path="/LandPage" element={<LandPage />} />
          <Route path="/User" element={<UserProfile />} />
          <Route path="/Pelatihan" element={<Pelatihan />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pelamar" element={<Pelamar />} />
          <Route path="/Interview" element={<Interview />} />
          <Route path="/TesLanjutan" element={<TesLanjutan />} />
          <Route path="/Mentor" element={<DaftarMentor />} />
          <Route path="/AdmProfile" element={<AdmProfile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
