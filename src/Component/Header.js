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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
            <a onClick={handleClick} className="nav-links" style={{cursor: 'pointer'}}>PROFIL</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div style={{height:"26px", width:"100px"}}>
            <NavLink exact to="/Profil" className="nav-links">
              <Button variant="text" sx={{color:'black'}}>Dropdown</Button>
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClick} className="nav-links" style={{cursor: 'pointer'}}>INFORMASI PUBLIK</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div style={{height:"26px", width:"100px"}}>
            <NavLink exact to="/InformasiPublik" className="nav-links">
              DROPDOWN
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClick} className="nav-links" style={{cursor: 'pointer'}}>PPID</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div style={{height:"26px", width:"100px"}}>
            <NavLink exact to="/Ppid" className="nav-links">
              DROPDOWN
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClick} className="nav-links" style={{cursor: 'pointer'}}>REGULASI</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div style={{height:"26px", width:"100px"}}>
            <NavLink exact to="/Regulasi" className="nav-links">
              DROPDOWN
            </NavLink>
          </div>
          </Popover>
          </li>
          <li className="nav-item">
          <div className="icon">
            <a onClick={handleClick} className="nav-links" style={{cursor: 'pointer'}}>NEWS & GALERY</a>
            <ArrowDropDownIcon />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
          <div style={{height:"26px", width:"100px"}}>
            <NavLink exact to="/NewsGalery" className="nav-links">
              DROPDOWN
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