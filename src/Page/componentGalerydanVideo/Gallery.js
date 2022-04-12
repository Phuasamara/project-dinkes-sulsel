import React from 'react';
import Grid from '@mui/material/Grid';
import Berita1 from '../../Images/berita 1.png';
import Galery1 from '../../Images/galery1.png';
import Gallery1 from './Gallery1';

function Gallery(){
    return(
        <div style={{padding: '0 15px'}}>
        <p style={{fontSize: 15}}>Galeri & News / News</p>
        <p style={{fontSize: 50, marginBottom: 10, marginTop: 20, fontWeight: 'bold'}}>Gallery Foto</p>
        <Gallery1 />
        </div>
    )
}

export default Gallery;