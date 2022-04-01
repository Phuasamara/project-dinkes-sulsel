import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import '../Mappingstyle.css';
import StatusCard from './StatusCard';
function Mapping() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container jarak-padding">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          style={{borderRadius: '20px 0 0 20px'}}
          onClick={() => toggleTab(1)}
        >
          Mapping COVID-19
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Angka Kematian
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          style={{borderRadius: '0 20px 20px 0'}}
          onClick={() => toggleTab(3)}
        >
          Rumah Sakit & Puskesmas
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "text  active-content" : "text"}
        >
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6}>
              haiii
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="map-tittle">Kabupaten Bone</p>
              <div className="map-card">
              <StatusCard status="Suspect COVID-19" jumlah="286"/>
              </div>
              <div className="map-card">
              <StatusCard status="Dirawat" jumlah="56"/>
              </div>
              <div className="map-card">
              <StatusCard status="Karantina" jumlah="40"/>
              </div>
              <div className="map-card">
              <StatusCard status="Isolasi Mandiri" jumlah="52"/>
              </div>
              <div className="map-card">
              <StatusCard status="Meninggal Dunia" jumlah="138"/>
              </div>
              <div className="map-card">
              <StatusCard status="Vaksin 1" jumlah="2035"/>
              </div>
              <div className="map-card">
              <StatusCard status="Vaksin 2" jumlah="1935"/>
              </div>
              <div className="map-card">
              <StatusCard status="Booster" jumlah="637"/>
              </div>
            </Grid>
          </Grid>
        </div>

        <div
          className={toggleState === 2 ? "text  active-content" : "text"}
        >
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6}>
              haiii
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="map-tittle">Kabupaten Bone</p>
              <div className="map-card">
              <StatusCard status="COVID-19" jumlah="156"/>
              </div>
              <div className="map-card">
              <StatusCard status="Jantung Iskemik" jumlah="56"/>
              </div>
              <div className="map-card">
              <StatusCard status="Stroke" jumlah="40"/>
              </div>
              <div className="map-card">
              <StatusCard status="Demam Berdarah" jumlah="52"/>
              </div>
              <div className="map-card">
              <StatusCard status="Malaria" jumlah="48"/>
              </div>
              <div className="map-card">
              <StatusCard status="Diabetes" jumlah="40"/>
              </div>
              <div className="map-card">
              <StatusCard status="Paru-Paru" jumlah="32"/>
              </div>
              <div className="map-card">
              <StatusCard status="Kanker" jumlah="28"/>
              </div>
              <div className="map-card">
              <StatusCard status="HIV/AIDS" jumlah="25"/>
              </div>
            </Grid>
          </Grid>
        </div>

        <div
          className={toggleState === 3 ? "text  active-content" : "text"}
        >
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6}>
              haiii
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="map-tittle">Kabupaten Bone</p>
              <div className="map-card">
              <StatusCard status="RSUD Tenriawaru Bone"/>
              </div>
              <div className="map-card">
              <StatusCard status="Rumah Sakit Hapsah"/>
              </div>
              <div className="map-card">
              <StatusCard status="Rumah Sakit Tentara Dr.M.Yasin Wtampone"/>
              </div>
              <div className="map-card">
              <StatusCard status="RSUD Datu Pancaitana"/>
              </div>
              <div className="map-card">
              <StatusCard status="RS. Pancaitana"/>
              </div>
              <div className="map-card">
              <StatusCard status="Poli Jiwa RSUD Tenriawaru"/>
              </div>
              <div className="map-card">
              <StatusCard status="Rs Jiwa"/>
              </div>
              <div className="map-card">
              <StatusCard status="Rumah Rusdiman"/>
              </div>
              <div className="map-card">
              <StatusCard status="Rsud Palatte"/>
              </div>
              <div className="map-card">
              <StatusCard status="Incenerator"/>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Mapping;