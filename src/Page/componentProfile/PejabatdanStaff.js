import React, {Fragment} from 'react';
import PejabatCard from './PejabatCard';
import '../Profilestyle.css';
import Grid from '@mui/material/Grid';


function PejabatdanStaff(){
    return(
        <>
        <div className='div-profil'>
            <p className='judul-profil'>PEGAWAI</p>
        </div>
        <Grid container spacing={2} alignItems="stretch" style={{paddingBottom: 20}}>
            <Grid item xs={12} sm={12} className='pejabat-judul'>
                <p className='pejabat-font'>PEJABAT DAN STAFF</p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PejabatCard avatar="/static/images/avatar/1.jpg" atas="Tofan Arief Wibowo, S.Kep.,Ns.,M.Kes" bawah="Staf Bagian Tata Usaha UPTD Akademi Keperawatan Anging Mamiri	" />
              </div>
            </Grid>
        </Grid>
        </>
    )
}

export default PejabatdanStaff;