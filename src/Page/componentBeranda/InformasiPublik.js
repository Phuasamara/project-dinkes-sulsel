import React from 'react';
import Link from '@mui/material/Link';
import informasi1 from '../../Images/informasi1.png';
import informasi2 from '../../Images/informasi2.png';
import informasi3 from '../../Images/informasi3.png';
import informasi4 from '../../Images/informasi4.png';
import informasi5 from '../../Images/informasi5.png';
import informasi6 from '../../Images/informasi6.png';
import informasi7 from '../../Images/informasi7.png';
import informasi8 from '../../Images/informasi8.png';
import informasi9 from '../../Images/informasi9.png';
import informasi10 from '../../Images/informasi10.png';
import informasi11 from '../../Images/informasi11.png';
import informasi12 from '../../Images/informasi12.png';

function InformasiPublik() {
    return(
        <>
        <div className='informasiPublik jarak-informasi jarak-padding'>
            <p className='informasi-judul'>INFORMASI PUBLIK</p>
        </div>
        <div className='informasiPublik jarak-informasi'>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi1} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Agenda</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi2} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Pengumuman</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi3} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Rencana Kerja</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi4} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Rencana Strategi</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi5} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Indikator Kerja</p>}
            </Link>
            </div>
        </div>
        </div>
        <div className='informasiPublik jarak-informasi'>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi6} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Rencana Aksi</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi7} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Profil Kesehatan</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi8} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Materi</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi9} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>LAKIP</p>}
            </Link>
            </div>
        </div>
        </div>
        <div className='informasiPublik jarak-informasi'>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi10} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Kesehatan Gratis</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi11} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>#Covid-19</p>}
            </Link>
            </div>
        </div>
        <div className='informasi'>
            <div>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<img src={informasi12} alt="foto" className='p informasi-image' />}
            </Link>
            <Link href="#" underline="none" sx={{color: 'black'}}>
                {<p className='informasi-text p'>Lainnya</p>}
            </Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default InformasiPublik;