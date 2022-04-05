import React, {Fragment} from 'react';
import '../Profilestyle.css';

function VisiMisi(){
    return(
        <>
        <div className='div-profil'>
            <p className='judul-profil'>VISI DAN MISI</p>
        </div>
        <div>
            <div className='visi-misi ukuran-judul'>
                <p className='judul-visi'>
                VISI
                </p>
            </div>
            <div className='visi-misi'>
                <p>
                “Sulawesi Selatan yang Inovatif, Produktif, Kompetitif, Inklusif dan Berkarakter”
                </p>
            </div>
            <div className='visi-misi ukuran-judul'>
                <p className='judul-visi'>
                MISI
                </p>
            </div>
            <div className='visi-misi'>
                <p>
                1. Pemerintahan yang berorientasi melayani, inovatif, dan berkarakter. <br></br>
                2. Peningkatan infrastruktur yang berkualitas dan aksesibel. <br></br>
                3. Pembangunan pusat-pusat pertumbuhan ekonomi baru. <br></br>
                </p>
            </div>
        </div>
        </>
    );
}

export default VisiMisi;