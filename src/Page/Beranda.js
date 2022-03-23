import React from 'react';
import Grid from '@mui/material/Grid';
import Gambar from '../Images/beranda.png';
import Button from '@mui/material/Button';
import './Berandastyle.css';

function Beranda(){
    return(
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} sx={{zIndex: 0}}>
                <img src={Gambar} alt="foto" width={910} height={550} />
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
                <Button variant="contained" size="small" sx={{backgroundColor: "#F5B400", marginTop:3}}>Lihat Berita</Button>
                </div>
            </Grid>
        </Grid>
    )
}
export default Beranda;