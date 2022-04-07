import React from 'react';
import Button from '@mui/material/Button';
import '../Berandastyle.css';

function Pengaduan(){
    return(
        <div className='jarak-padding div-pengaduan'>
            <div>
                <p className='pengaduan-font'>KUNJUNGI KAMI</p>
                <div className='pengaduan-button'>
                    <p className='pengaduan-button1'><Button variant="contained" size="medium" sx={{'&:hover': {backgroundColor: '#F5b400'}, backgroundColor:'#F5b400'}}>Kepuasan Pelanggan</Button></p>
                    <p className='pengaduan-button2'><Button variant="contained" size="medium" sx={{'&:hover': {backgroundColor: '#F5b400'}, backgroundColor:'#F5b400'}}>Pengaduan Pelanggan</Button></p>
                </div>
            </div>
        </div>
    )
}

export default Pengaduan;