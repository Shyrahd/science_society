import "./App.css";
import Daftar from "./pages/daftar";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Profil from "./pages/profil";
import Lamar from "./pages/Lamar";
import Jadwal from "./pages/Jadwal";

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
