import React from 'react';
import Grid from '@mui/material/Grid';
import Foto from '../Images/LogoHeader.png';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import PersonIcon from '@mui/icons-material/Person';
import Twitter from '../Images/twit.png';
import Facebook from '../Images/face.png';
import Instagram from '../Images/insta2.png';
import Youtube from '../Images/yt2.png';
import Tiktok from '../Images/tiktok.png';
import "./folder.css";

function Footer(){
    return(
        <Grid container style={{padding: '20px'}} className="color">
            <Grid item xs={5} sm={5} className="footer">
                <div className="logo jarak-logo">
                <img src={Foto} alt="foto" className="ukuran-logo" />
                <div className="nav-judul">
                <p className="footer-judul judul-atas">DINAS KESEHATAN</p>
                <p className="footer-judul judul-bawah">PROVINSI SULAWESI SELATAN</p>
                </div>
                </div>
                <div className="component">
                    <CallIcon sx={{ color: "#F5B400", fontSize: 32}} />
                    <p className="font-component">(0411) 586451</p>
                </div>
                <div className="component">
                    <LocationOnIcon sx={{ color: "#F5B400", fontSize: 34}} />
                    <p className="font-component">Jl. Perintis Kemerdekaan KM. 11 No. 128,<br></br>
                    Tamalanrea, Kota Makassar, Sulawesi Selatan<br></br>
                    90245</p>
                </div>
                <div>
                    <Button variant="outlined" size="small" sx={{'&:hover': {borderColor: '#F5B400'}, borderColor: '#F5B400', color:'#F5B400'}} className="footer-button">Hubungi Kami</Button>
                </div>
            </Grid>
            <Grid item xs={2} sm={2} className="footer">
                <p className="footer-judulcomponent">Link Terkait</p>
                <p>
                    <Link href="#" underline="hover" sx={{color: "#F2F8F2"}}>
                        {'Pemprov Sulawesi Selatan'}
                    </Link>
                </p>
                <p>
                    <Link href="#" underline="hover" sx={{color: "#F2F8F2"}}>
                        {'Kementrian Kesehatan'}
                    </Link>
                </p>
                <p>
                    <Link href="#" underline="hover" sx={{color: "#F2F8F2"}}>
                        {'Komdat Prioritas'}
                    </Link>
                </p>
                <p>
                    <Link href="#" underline="hover" sx={{color: "#F2F8F2"}}>
                        {'Gizi KIA'}
                    </Link>
                </p>
            </Grid>
            <Grid item xs={2} sm={2} className="footer">
                <p className="footer-judulcomponent jarak-statistik">Statistik</p>
                <div className="footer-statistik">
                    <PersonIcon sx={{color: "#F5B400"}} fontSize="small"/>
                    <p className="statistik-font"> 2 Online </p>
                </div>
                <div className="footer-statistik">
                    <PersonIcon sx={{color: "#F5B400"}} fontSize="small"/>
                    <p className="statistik-font"> 2 Online </p>
                </div>
                <div className="footer-statistik">
                    <PersonIcon sx={{color: "#F5B400"}} fontSize="small"/>
                    <p className="statistik-font"> 2 Online </p>
                </div>
                <div className="footer-statistik">
                    <PersonIcon sx={{color: "#F5B400"}} fontSize="small"/>
                    <p className="statistik-font"> 2 Online </p>
                </div>
            </Grid>
            <Grid item xs={3} sm={3} className="footer">
                <div style={{width: 160}}>
                <p className="sosialmedia-judul">Sosial Media</p>
                <div className="footer-sosialmedia">
                <div className="sosialmedia-gambar">
                    <Link href="#" underline="none" sx={{color: "#F2F8F2"}}>
                        {<img src={Twitter} alt="foto" />}
                    </Link>
                </div>
                <div className="sosialmedia-gambar">
                    <Link href="#" underline="none" sx={{color: "#F2F8F2"}}>
                        {<img src={Instagram} alt="foto" />}
                    </Link>
                </div>
                <div className="sosialmedia-gambar">
                    <Link href="#" underline="none" sx={{color: "#F2F8F2"}}>
                        {<img src={Tiktok} alt="foto" />}
                    </Link>
                </div>
                <div className="sosialmedia-gambar">
                    <Link href="#" underline="none" sx={{color: "#F2F8F2"}}>
                        {<img src={Youtube} alt="foto" />}
                    </Link>
                </div>
                <div className="sosialmedia-gambar">
                    <Link href="#" underline="none" sx={{color: "#F2F8F2"}}>
                        {<img src={Facebook} alt="foto" />}
                    </Link>
                </div>
                </div>
                </div>
            </Grid>
        </Grid>
    )
}
export default Footer;