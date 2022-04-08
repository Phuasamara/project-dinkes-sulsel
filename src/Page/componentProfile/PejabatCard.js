import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

export default function StatusCard(props){
    return(
        <div style={{display: 'flex', justifyContent:'center', padding: '10px 10px', alignItems: 'center'}}>
            <Grid container style={{backgroundColor: 'white', padding: 20, boxShadow: "5px 5px 5px 5px #9E9E9E"}}>
                <Grid item xs={6} sm={4} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <Avatar alt="Remy Sharp" src={props.avatar} sx={{ width: 105, height: 105 }}/>
                </Grid>
                <Grid item xs={6} sm={8}>
                    <p style={{fontSize: 20}}>{props.atas}</p>
                    <Divider />
                    <p style={{fontSize: 15, color: '#A3A5A7'}}>{props.bawah}</p>
                </Grid>
            </Grid>
        </div>
    )
}