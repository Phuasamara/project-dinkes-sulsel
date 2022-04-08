import React from 'react';
import Grid from '@mui/material/Grid';
import Berita1 from '../../Images/berita 1.png';
import Galery1 from '../../Images/galery1.png';

function Gallery(){
    return(
        <div style={{padding: '0 10px'}}>
        <p style={{fontSize: 15}}>Galeri & News / News</p>
        <p style={{fontSize: 50, marginBottom: 10, marginTop: 20, fontWeight: 'bold'}}>Gallery Foto</p>
        <Grid container style={{marginTop: 1}}>
            <Grid item xs={12} sm={4} style={{padding: 0, display: 'flex', justifyContent: 'flex-start'}}>
                <div style={{position: 'relative', width: '98%', height: 285}}>
                <img src={Berita1} alt="foto" style={{width: '100%', position: 'absolute', top: 0, left: 0}} />
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50% )', textAlign: 'center', color: 'white'}}>Judul</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: 0, display: 'flex', justifyContent: 'center'}}>
                <div style={{position: 'relative', width: '98%', height: 285}}>
                <img src={Berita1} alt="foto" style={{width: '100%', position: 'absolute', top: 0, left: 0}} />
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50% )', textAlign: 'center', color: 'white'}}>Judul</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: 0, display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{position: 'relative', width: '98%', height: 285}}>
                <img src={Berita1} alt="foto" style={{width: '100%', position: 'absolute', top: 0, left: 0}} />
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50% )', textAlign: 'center', color: 'white'}}>Judul</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: 0, display: 'flex', justifyContent: 'flex-start'}}>
                <div style={{position: 'relative', width: '98%', height: 285}}>
                <img src={Berita1} alt="foto" style={{width: '100%', position: 'absolute', top: 0, left: 0}} />
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50% )', textAlign: 'center', color: 'white'}}>Judul</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: 0, display: 'flex', justifyContent: 'center'}}>
                <div style={{position: 'relative', width: '98%', height: 285}}>
                <img src={Berita1} alt="foto" style={{width: '100%', position: 'absolute', top: 0, left: 0}} />
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50% )', textAlign: 'center', color: 'white'}}>Judul</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: 0, display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{position: 'relative', width: '98%', height: 285}}>
                <img src={Berita1} alt="foto" style={{width: '100%', position: 'absolute', top: 0, left: 0}} />
                <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate( -50%, -50% )', textAlign: 'center', color: 'white'}}>Judul</p>
                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default Gallery;