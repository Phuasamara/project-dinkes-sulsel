import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Ilustrasi from '../../Images/ilustrasi.png';
import '../Berandastyle.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function IsiVideo() {
  return (
    <div style={{marginTop:70, marginBottom: 70}}>
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} className='grid-ilustrasi'>
                <img src={Ilustrasi} alt="foto" className="ilustrasi-gambar" />
                <div className='ilustrasi'>
                    <div className='ilustrasi-judul'>
                    <p className='ilustrasi-font'>7 CARA <br></br>
                    MENCEGAH VARIAN <br></br>
                    OMICRON</p>
                    <Button variant="contained" size="large" sx={{'&:hover': {backgroundColor: '#F5b400'}, backgroundColor:'#F5b400', marginTop: 1, width:{xs:'10px', md:'300px'}, height:{xs:'20px', md:'40px'}}}><p>Info Lengkap</p></Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  );
}
