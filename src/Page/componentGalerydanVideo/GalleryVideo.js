import React from 'react';
import Grid from '@mui/material/Grid';
import Galery1 from '../../Images/galery1.png';
import ReactPlayer from "react-player";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { fontSize } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function GalleryVideo(){
    return(
        <div>
        <Grid container style={{marginTop: 1}}>
        <p style={{fontSize: 15}}>Galeri & News / News</p>
            <Grid item xs={12} sm={12}>
                <p style={{fontSize: 50, marginBottom: 10, marginTop: 20, fontWeight: 'bold'}}>Gallery Video</p>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div>
                <ReactPlayer
                url="https://youtu.be/ML5bCZ2DCYE"
                width="100%"
                height="450px"
                playing
                playIcon= {<PlayCircleOutlineIcon style={{color: 'white', fontSize: 150}} /> }
                light={Galery1}
/>
                <div style={{backgroundColor: 'white'}}>
                    <p style={{margin: 0, fontSize: 20}}>Video Tittle</p>
                    <p style={{margin: 0}}><AccessTimeIcon/>23/3/3</p>
                </div>
                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default GalleryVideo;