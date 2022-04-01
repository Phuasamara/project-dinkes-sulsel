import React from 'react';
import Header from './Component/Header';
import Beranda from './Page/Beranda';
import Footer from './Component/Footer';
import Profil from './Page/Profil';
import './responsive.css';
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
      <Footer />
    </Router>
  );
}

export default App;