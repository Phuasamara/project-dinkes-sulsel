import React, {Fragment} from 'react';
import Slide from './componentBeranda/Slide';
import './Berandastyle.css';
import '../responsive.css';
import Dashbord from './componentBeranda/Dashbord';
import Galery from './componentBeranda/Galery';
import InformasiPublik from './componentBeranda/InformasiPublik';
import Mapping from './componentBeranda/Mapping';
import Video from './componentBeranda/Video';

function Beranda(){
    return(
        <Fragment>
        <Slide />
        <Dashbord className='jarak-padding'/>
        <Mapping className='jarak-padding'/>
        <Video />
        <Galery className='jarak-padding'/>
        <InformasiPublik className='jarak-padding'/>
        </Fragment>
        );
    }

export default Beranda;