import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Foto from '../Images/LogoHeader.png';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import "./folder.css";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorProfil, setAnchorProfil] = React.useState(null);
  const [anchorInformasi, setAnchorInformasi] = React.useState(null);
  const [anchorPpid, setAnchorPpid] = React.useState(null);
  const [anchorRegulasi, setAnchorRegulasi] = React.useState(null);
  const [anchorNews, setAnchorNews] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickProfil = (event) => {
    setAnchorProfil(event.currentTarget);
  };
  const handleClickInformasi = (event) => {
    setAnchorInformasi(event.currentTarget);
  };
  const handleClickPpid = (event) => {
    setAnchorPpid(event.currentTarget);
  };
  const handleClickRegulasi = (event) => {
    setAnchorRegulasi(event.currentTarget);
  };
  const handleClickNews = (event) => {
    setAnchorNews(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorInformasi(null);
    setAnchorPpid(null);
    setAnchorRegulasi(null);
    setAnchorNews(null);
    setAnchorProfil(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const openProfil = Boolean(anchorProfil);
  const idProfil = openProfil ? 'simple-popover' : undefined;

  const openInformasi = Boolean(anchorInformasi);
  const idInformasi = openInformasi ? 'simple-popover' : undefined;

  const openPpid = Boolean(anchorPpid);
  const idPpid = openPpid ? 'simple-popover' : undefined;

  const openRegulasi = Boolean(anchorRegulasi);
  const idRegulasi = openRegulasi ? 'simple-popover' : undefined;

  const openNews = Boolean(anchorNews);
  const idNews = openNews ? 'simple-popover' : undefined;
  return (
    <>
    <div className="nav-atas">
      <p>SELAMAT DATANG DI WEBSITE RESMI DINAS KESEHATAN PROVINSI SULAWESI SELATAN</p>
    </div>
    <nav className="navbar">
      <div className='nav-container'>
        <Link exact to="/" className="nav-logo">
          <div className="logo">
          <img src={Foto} alt="foto" className="ukuran-logo" />
          <div className="nav-judul">
          <p className="judul judul-atas">DINAS KESEHATAN</p>
          <p className="judul judul-bawah">PROVINSI SULAWESI SELATAN</p>
          </div>
          </div>
        </Link>
        <MenuIcon sx={{display: {xs: 'block', md: 'none'}, marginRight: '20px'}}/>
      <Box sx={{display: {xs: 'none', md: 'block'}}}>
        <ul className="nav-menu" >
          <li className="nav-item">
            <NavLink exact to="/" className="nav-links">
              BERANDA
            </NavLink>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClickProfil} className="nav-links" style={{cursor: 'pointer'}}>PROFIL</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={idProfil}
            open={openProfil}
            anchorEl={anchorProfil}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div>
            <NavLink to="/Sambutan" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Sambutan</Button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/VisiMisi" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Visi Misi</Button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/StrukturOrganisasi" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Struktur Organisasi</Button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/PejabatdanStaff" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Pegawai</Button>
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClickInformasi} className="nav-links" style={{cursor: 'pointer'}}>INFORMASI PUBLIK</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={idInformasi}
            open={openInformasi}
            anchorEl={anchorInformasi}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div>
            <NavLink to="/Informasi" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Informasi</Button>
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClickPpid} className="nav-links" style={{cursor: 'pointer'}}>PPID</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={idPpid}
            open={openPpid}
            anchorEl={anchorPpid}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div>
            <NavLink to="/PPID" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>PPID</Button>
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClickRegulasi} className="nav-links" style={{cursor: 'pointer'}}>REGULASI</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={idRegulasi}
            open={openRegulasi}
            anchorEl={anchorRegulasi}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div>
            <NavLink to="/Sambutan" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Regulasi</Button>
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClickNews} className="nav-links" style={{cursor: 'pointer'}}>NEWS & GALERY</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={idNews}
            open={openNews}
            anchorEl={anchorNews}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div>
            <NavLink to="/Gallery" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Gallery</Button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/GalleryVideo" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Video</Button>
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Survei" className="nav-links">
              SURVEY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Download" className="nav-links">
              DOWNLOAD
            </NavLink>
          </li>
        </ul>
        </Box>
      </div>
    </nav>
    </>
  )
};
export default Header;