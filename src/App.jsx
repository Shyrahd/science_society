import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Notfound from "./pages/Notfound";
import Profil from "./pages/Profil";
import Lamar from "./pages/Lamar";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Lamar" element={<Lamar />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
