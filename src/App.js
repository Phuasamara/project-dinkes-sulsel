import React from 'react';
import Header from './Component/Header';
import Beranda from './Page/Beranda';
import Profil from './Page/Profil';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
    </Router>
  );
}

export default App;