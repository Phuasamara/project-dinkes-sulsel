import React from 'react';
import Header from './Component/Header';
import Beranda from './Page/Beranda';
import Footer from './Component/Footer';
import Profil from './Page/Profil';
import Sambutan from './Page/componentProfile/Sambutan';
import StrukturOrganisasi from './Page/componentProfile/StrukturOrganisasi';
import VisiMisi from './Page/componentProfile/VisiMisi';
import PejabatdanStaff from './Page/componentProfile/PejabatdanStaff';
import Gallery from './Page/componentGalerydanVideo/Gallery';
import GalleryVideo from './Page/componentGalerydanVideo/GalleryVideo';
import Peraturanpemerintah from './Page/componentRegulasi/Peraturanpemerintah';
import Peraturan2 from './Page/componentRegulasi/Peraturan2';
import Survei from './Page/Survei';
import CalendarEvent from './Page/CalendarEvent';
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
          <Route path="/Sambutan" element={<Sambutan />} />
          <Route path="/StrukturOrganisasi" element={<StrukturOrganisasi />} />
          <Route path="/VisiMisi" element={<VisiMisi />} />
          <Route path="/PejabatdanStaff" element={<PejabatdanStaff />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/GalleryVideo" element={<GalleryVideo />} />
          <Route path="/Peraturanpemerintah" element={<Peraturanpemerintah />} />
          <Route path="/Peraturan2" element={<Peraturan2 />} />
          <Route path="/Survei" element={<Survei />} />
          <Route path="/CalendarEvent" element={<CalendarEvent />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;