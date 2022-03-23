import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Foto from '../Images/LogoHeader.png';
import "./folder.css";

function Header() {
  return (
    <>
    <div className="nav-atas">
      <h5>SELAMAT DATANG DI WEBSITE RESMI DINAS KESEHATAN PROVINSI SULAWESI SELATAN</h5>
    </div>
    <nav className="navbar">
      <div className='nav-container'>
        <NavLink exact to="/" className="nav-logo">
          <div className="logo">
          <img src={Foto} alt="foto" className="ukuran-logo" />
          <div className="nav-judul">
          <h2 className="judul">DINAS KESEHATAN</h2>
          <h4 className="judul">PROVINSI SULAWESI SELATAN</h4>
          </div>
          </div>
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-links">
              BERANDA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Profil" className="nav-links">
              PROFIL
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/InformasiPublik" className="nav-links">
              INFORMASI PUBLIK
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Ppid" className="nav-links">
              PPID
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Regulasi" className="nav-links">
              REGULASI
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Newsgalery" className="nav-links">
              NEWS & GALERY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Survei" className="nav-links">
              SURVEI
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Download" className="nav-links">
              DOWNLOAD
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
};
export default Header;