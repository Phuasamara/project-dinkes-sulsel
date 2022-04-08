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
        <Grid container spacing={4} style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 30, marginTop: 1}}>
        <p style={{fontSize: 15}}>Galeri & News / News</p>
            <Grid item xs={12} sm={12}>
                <p style={{fontSize: 50, marginBottom: 10, marginTop: 0, fontWeight: 'bold'}}>Gallery Video</p>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: '90%', width: '90%'}}> 
                <div style={{boxShadow: "5px 5px 5px 5px #9E9E9E"}}>
                <ReactPlayer
                url="https://youtu.be/ML5bCZ2DCYE"
                width="100%"
                height="350px"
                playing
                playIcon= {<PlayCircleOutlineIcon style={{color: 'white', fontSize: 150}} /> }
                light={Galery1}
/>
                <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <p style={{margin: 0, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 20}}>Video Tittle</p>
                    <p style={{margin: 0, color:'#9E9E9E', display: 'flex', alignItems: 'center', paddingRight: 20}}><AccessTimeIcon color="disabled" sx={{ fontSize: 15, marginRight: 1 }}/>23/3/3</p>
                </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: '90%', width: '90%'}}> 
                <div style={{boxShadow: "5px 5px 5px 5px #9E9E9E"}}>
                <ReactPlayer
                url="https://youtu.be/ML5bCZ2DCYE"
                width="100%"
                height="350px"
                playing
                playIcon= {<PlayCircleOutlineIcon style={{color: 'white', fontSize: 150}} /> }
                light={Galery1}
/>
                <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <p style={{margin: 0, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 20}}>Video Tittle</p>
                    <p style={{margin: 0, color:'#9E9E9E', display: 'flex', alignItems: 'center', paddingRight: 20}}><AccessTimeIcon color="disabled" sx={{ fontSize: 15, marginRight: 1 }}/>23/3/3</p>
                </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: '90%', width: '90%'}}> 
                <div style={{boxShadow: "5px 5px 5px 5px #9E9E9E"}}>
                <ReactPlayer
                url="https://youtu.be/ML5bCZ2DCYE"
                width="100%"
                height="350px"
                playing
                playIcon= {<PlayCircleOutlineIcon style={{color: 'white', fontSize: 150}} /> }
                light={Galery1}
/>
                <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <p style={{margin: 0, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 20}}>Video Tittle</p>
                    <p style={{margin: 0, color:'#9E9E9E', display: 'flex', alignItems: 'center', paddingRight: 20}}><AccessTimeIcon color="disabled" sx={{ fontSize: 15, marginRight: 1 }}/>23/3/3</p>
                </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: '90%', width: '90%'}}> 
                <div style={{boxShadow: "5px 5px 5px 5px #9E9E9E"}}>
                <ReactPlayer
                url="https://youtu.be/ML5bCZ2DCYE"
                width="100%"
                height="350px"
                playing
                playIcon= {<PlayCircleOutlineIcon style={{color: 'white', fontSize: 150}} /> }
                light={Galery1}
/>
                <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <p style={{margin: 0, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 20}}>Video Tittle</p>
                    <p style={{margin: 0, color:'#9E9E9E', display: 'flex', alignItems: 'center', paddingRight: 20}}><AccessTimeIcon color="disabled" sx={{ fontSize: 15, marginRight: 1 }}/>23/3/3</p>
                </div>
                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default GalleryVideo;