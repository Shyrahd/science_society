import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Notfound from "./pages/Notfound";
import Profil from "./pages/Profil";
import Lamar from "./pages/Lamar";
import Jadwal from "./pages/Jadwal";
import Daftar from "./pages/Daftar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/Lamar" element={<Lamar />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
