import React, {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Patient1 from '../../Images/patient 1.png';
import Patient2 from '../../Images/patient 2.png';
import Patient3 from '../../Images/patient 3.png';
import Patient4 from '../../Images/patient 4.png';
import '../Berandastyle.css';

function Dashbord(){
    return(
        <>
        <div className='jarak-padding'>
                <p className='dashbord-tittle'>DASHBORD</p>
                <p className='performa-tittle'>PERFORMA RUMAH SAKIT</p>
            <div>
                <div className='dashbord-div'>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={6} sm={3} className="patient patient1">
                        <img src={Patient1} alt='foto' className='dashbord-image'/>
                        <div className="tittle">
                        <p className="p angka">2586</p>
                        <p className="p font">Kujungan Pasien</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className="patient">
                        <img src={Patient2} alt='foto' className='dashbord-image'/>
                        <div className="tittle">
                        <p className="p angka">1409</p>
                        <p className="p font">Pasien Rawat Inap</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className="patient">
                        <img src={Patient3} alt='foto' className='dashbord-image'/>
                        <div className="tittle">
                        <p className="p angka">1208</p>
                        <p className="p font">Pasien BPJS</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className="patient">
                        <img src={Patient4} alt='foto' className='dashbord-image'/>
                        <div className="tittle">
                        <p className="p angka">382</p>
                        <p className="p font">Pasien Covid-19</p>
                        </div>
                    </Grid>
                </Grid>
                </div>
            </div>
        </div>
        </>
    );
}
export default Dashbord;