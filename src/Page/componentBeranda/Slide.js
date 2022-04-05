import React from 'react';
import Grid from '@mui/material/Grid';
import Gambar from '../../Images/beranda.png';
import Button from '@mui/material/Button';
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import '../Berandastyle.css';

function Slide(){
    return(
        <Flickity data-flickity={{ "pageDots": false }}>
            <Grid container>
            <Grid item xs={12} sm={6} sx={{zIndex: 0}}>
                <img src={Gambar} alt="foto" className="gambar-beranda" />
            </Grid>
            <Grid item xs={12} sm={6} sx={{zIndex: 1, backgroundColor: '#F2F8F2'}} className="content">
                <div className="startDiv">
                <p className='style-atas jarak'>BERITA TERBARU</p>
                <p className='style-tengah tebal jarak'>Penjelasan <br></br>
                    Kenapa varian Omicron <br></br>
                    lebih cepat menular
                </p>
                <p className='style-bawah jarak'>Kalau varian lain hanya satu partikel <br></br>
                virus menghasilkan 50, Omicron bisa <br></br>
                lebih banyak yaitu 100,".</p>
                <Button variant="contained" size="small" sx={{'&:hover': {backgroundColor: '#F5b400'}, backgroundColor:'#F5b400', marginTop:3, width:{xs:'10px', md:'150px'}, height:{xs:'20px', md:'30px'}}}><p className="font-button">Lihat Berita</p></Button>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={6} sm={6} sx={{zIndex: 0}}>
                <img src={Gambar} alt="foto" className="gambar-beranda" />
            </Grid>
            <Grid item xs={6} sm={6} sx={{zIndex: 1, backgroundColor: '#F2F8F2'}} className="content">
                <div className="startDiv">
                <p className='style-atas jarak'>BERITA TERBARU</p>
                <p className='style-tengah tebal jarak'>Penjelasan <br></br>
                    Kenapa varian Omicron <br></br>
                    lebih cepat menular
                </p>
                <p className='style-bawah jarak'>Kalau varian lain hanya satu partikel <br></br>
                virus menghasilkan 50, Omicron bisa <br></br>
                lebih banyak yaitu 100,".</p>
                <Button variant="contained" size="small" sx={{'&:hover': {backgroundColor: '#F5b400'}, backgroundColor:'#F5b400'}}>Lihatt Berita</Button>
                </div>
            </Grid>
        </Grid>
        </Flickity>
        );
    }

export default Slide;