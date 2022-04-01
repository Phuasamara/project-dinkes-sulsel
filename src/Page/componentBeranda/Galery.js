import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Berita1 from '../../Images/berita 1.png';
import Berita2 from '../../Images/berita 2.png';
import Berita3 from '../../Images/berita 3.png';
import Galery1 from '../../Images/galery1.png';
import Galery2 from '../../Images/galery2.png';
import Foto from '../../Images/galeryFoto.png';
import Video from '../../Images/galeryVidio.png';
import '../Berandastyle.css';

function Galery(){
    return(
        <Grid container className='jarak-padding'>
            <Grid item xs={5} sm={5}>
            <p className='berita-judul'>BERITA</p>
                <div className='berita'>
                    <img src={Berita1} alt="foto" className="ukuran-berita" />
                    <Link href="#" underline="hover" sx={{color: 'black'}}>
                        {<p className='berita-text'>
                        Lorem Ipsum is simply <br></br>
                        dummy text of <br></br>
                        the printing <br></br>
                        </p>}
                    </Link>
                </div>
                <div className='berita'>
                    <img src={Berita2} alt="foto" className="ukuran-berita" />
                    <Link href="#" underline="hover" sx={{color: 'black'}}>
                        {<p className='berita-text'>
                        Lorem Ipsum is simply <br></br>
                        dummy text of <br></br>
                        the printing <br></br>
                        </p>}
                    </Link>
                </div>
                <div className='berita'>
                    <img src={Berita3} alt="foto" className="ukuran-berita" />
                    <Link href="#" underline="hover" sx={{color: 'black'}}>
                        {<p className='berita-text'>
                        Lorem Ipsum is simply <br></br>
                        dummy text of <br></br>
                        the printing <br></br>
                        </p>}
                    </Link>
                </div>
            </Grid>
            <Grid item xs={5} sm={7} className='galeri'>
                <p className='berita-judul'>GALERI</p>
                <div className='berita'>
                    <img src={Galery1} alt="foto" className="ukuran-galeri" />
                    <div className='galeri-text'>
                        <Link href="#" underline="hover" sx={{color: '#F2F8F2'}}>
                            {<p className='text-size'>GALERI<br></br>
                            FOTO</p>}
                        </Link>
                        <img src={Foto} alt="foto" className="galeri-foto"/>
                    </div>
                </div>
                <div className='berita'>
                    <img src={Galery2} alt="foto" className="ukuran-galeri" />
                    <div className='galeri-text2'>
                        <Link href="#" underline="hover" sx={{color: '#F2F8F2'}}>
                            {<p className='text-size'>GALERI<br></br>
                            VIDEO</p>}
                        </Link>
                        <img src={Video} alt="foto" style={{float: 'right'}}/>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Galery;