import React, {Fragment} from'react';
import '../Profilestyle.css';
import Struktur from '../../Images/Struktur.png';

function StrukturOrganisasi(){
    return(
        <>
        <div className='div-profil'>
            <p className='judul-profil'>STRUKTUR ORGANISASI</p>
        </div>
        <div className='struktur-div'>
            <img src={Struktur} alt="foto" className='struktur-foto'/>
        </div>
        </>
    )
}

export default StrukturOrganisasi;