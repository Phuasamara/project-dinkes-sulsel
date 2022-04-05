import React, {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Dinas from '../../Images/kepaladinas.png';
import '../Profilestyle.css';

function Sambutan(){
    return(
        <>
        <div className='div-profil'>
            <p className='judul-profil'>SAMBUTAN KEPALA DINAS KESEHATAN <br></br>
            PROVINSI SULAWESI SELATAN</p>
        </div>
        <div className='jarak-teks'>
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={12} className='grid-awal'>
                <p className='awal-sambutan'>SELAMAT DATANG</p>
            </Grid>
            <Grid item xs={12} sm={8}>
                <p className='ukuran-isi'>Bismillaahirrohmaanirrohiim</p>

                <p className='ukuran-isi'>Assalamualaikum Warahmatullahi Wa barakatuh</p>

                <p className='isi-sambutan ukuran-isi'>Puji syukur kami panjatkan Kehadirat Allah Subhanahuwataala atas diluncurkannya situs resmi web Portal Dinas Kesehatan Provinsi Sulawesi Selatan. Website ini menyediakan informasi mengenai pengelolaan data seputar kesehatan. 
                Website ini dibuat untuk memberikan layanan informasi publik sebagai standar layanan keterbukaan informasi publik seperti yang tertuang dalam UU No. 14 Tahun 2008. 
                Kami harap website ini dapat bermanfaat dalam memberikan data dan informasi mengenai Dinas Kesehatan bagi masyarakat yang membutuhkan. 
                Pengguna website dapat mengakses dan mengunduh langsung publikasi data dan informasi, peraturan perundangan dan tupoksi Dinas Kesehatan. 
                Data dan informasi seputar Dinas Kesehatan Provinsi Sulawesi Selatan disajikan dalam bentuk produk publikasi dan ke depannya akan juga menampilkan produk-produk informasi berupa grafik yang interaktif. 
                Kami berusaha untuk menyajikan informasi yang terkini sehingga dapat memenuhi keinginan dan kebutuhan para stakeholder masyarakat Indonesia dan khususnya masyarakat provinsi Sulawesi Selatan.
                </p>

                <p className='isi-sambutan ukuran-isi'>
                Website ini diharapkan tidak hanya sebagai media publikasi dan promosi, namun juga dapat diakses sebagai sarana komunikasi interaktif, sehingga dapat memberikan manfaat bagi banyak pihak. 
                Ke depannya, website ini akan terus mendapatkan perbaikan dan peningkatan sehingga dapat memenuhi kebutuhan semua pengguna informasi. 
                Akhir kata, kepada semua pihak yang telah bekerjasama memberikan kontribusi sehingga web portal ini dapat diluncurkan dan memberikan khasanah lain dalam media diseminasi informasi di lingkungan Dinas Kesehatan Provinsi Sulawesi Selatan, kami ucapkan terimakasih.
                </p>

                <p className='ukuran-isi'>Makassar, 07 Januari 2022</p>


                <p className='isi2-sambutan'>dr. Arman Bausat, Sp.B, Sp.OT(K) Spine</p>

                <p className='isi3-sambutan'>Kepala Dinas Kesehatan Sulawesi Selatan </p>
            </Grid>
            <Grid item xs={12} sm={4} className="foto-sambutan" >
                <img src={Dinas} alt="foto"/>
            </Grid>
        </Grid>
        </div>
        </>
    );
}
export default Sambutan;