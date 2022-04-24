import React, {Fragment} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../responsive.css';

function Survei(){
    const [jeniskelamin, setjeniskelamin] = React.useState('');
  
    const handleChange = (event) => {
      setjeniskelamin(event.target.value);
    };

    const [pendidikan, setpendidikan] = React.useState('');
  
    const pendidikanChange = (event) => {
      setpendidikan(event.target.value);
    };

    const [pekerjaan, setpekerjaan] = React.useState('');
  
    const pekerjaanChange = (event) => {
      setpekerjaan(event.target.value);
    };

    const [value, setValue] = React.useState(null);

    return(
        <>
        <div style={{paddingLeft: 20, paddingRight: 20}}> 
            <p style={{fontSize: 30, fontWeight: 'bold'}}>
                Survei Pelayanan Publik
            </p>
            <Grid container sx={{paddingLeft:5, paddingBottom: 5}}>
            <div style={{boxShadow: "5px 5px 5px 5px #9E9E9E", width: '100%', padding: 10}} className="survei-form">
                <Grid item xs={12} sm={6} className="survei-formLeft">
                    <p>
                        <TextField fullWidth id="name" label="Nama" variant="outlined" />
                    </p>
                    <p>
                        <TextField fullWidth id="email" label="Email" variant="outlined" />
                    </p>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jeniskelamin}
                    label="Jenis Kelamin"
                    onChange={handleChange}
                >
                    <MenuItem value={'perempuan'}>Perempuan</MenuItem>
                    <MenuItem value={'laki'}>Laki-laki</MenuItem>
                </Select>
                </FormControl>
                <p>
                <FormControl fullWidth>
                <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Tanggal Lahir"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </FormControl>
                </p>
                </Grid>
                <Grid item xs={12} sm={6} className="survei-formRight">
                    <p>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pendidikan</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pendidikan}
                    label="Pendidikan"
                    onChange={pendidikanChange}
                    >
                    <MenuItem value={'perempuan'}>Perempuan</MenuItem>
                    <MenuItem value={'laki'}>Laki-laki</MenuItem>
                    </Select>
                    </FormControl>
                    </p>
                    <p>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pekerjaan</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pekerjaan}
                    label="Jenis Kelamin"
                    onChange={pekerjaanChange}
                    >
                    <MenuItem value={'perempuan'}>Perempuan</MenuItem>
                    <MenuItem value={'laki'}>Laki-laki</MenuItem>
                    </Select>
                    </FormControl>
                    </p>
                    <p>
                        Pernah mengajukan permohonan?
                    </p>
                    <p>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Pernah" />
                    </p>
                </Grid>
                </div>
            </Grid>
            <div style={{marginLeft: 40}}>
                <p style={{fontSize: 25, fontWeight: 'bold'}}>
                    Pertanyaan-pertanyaan Kuisoner
                </p>
            </div>
            <Grid container sx={{paddingLeft:5, paddingBottom: 5, backgrounColor: 'white'}}>
            <div style={{boxShadow: "5px 5px 5px 5px #9E9E9E", width: '100%', padding: 10}}>
                <div className="survei-form">
                <Grid item xs={12} sm={6} sx={{zIndex: 0, marginRight: 10}}>
                    <p>1. Menurut anda apakah kejelasan dan kepastian petugas yang melayani di Dinas Kesehatan benar-benar sudah sesuai ?</p>
                </Grid>
                <Grid item xs={12} sm={6} sx={{zIndex: 0,}}>
                    <p>
                    <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                    >
                    <FormControlLabel
                        value="sangatbaik"
                        control={<Radio />}
                        label="Sangat Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="baik"
                        control={<Radio />}
                        label="Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="cukupbaik"
                        control={<Radio />}
                        label="Cukup Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="tidakbaik"
                        control={<Radio />}
                        label="Buruk"
                        labelPlacement="top"
                    />
                    </RadioGroup>
                    </FormControl>
                    </p>
                </Grid>
                </div>
                <Grid item xs={12} sm={12} sx={{zIndex: 0,}}>
                    <Divider />
                </Grid>
                <div className="survei-form">
                <Grid item xs={12} sm={6} sx={{zIndex: 0, marginRight: 10}}>
                    <p>2. Apakah kesesuaian persyaratan pelayanan dengan jenis pelayanannya yang anda rasakan sudah benar-benar sesuai?</p>
                </Grid>
                <Grid item xs={12} sm={6} sx={{zIndex: 0,}}>
                    <p>
                    <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                    >
                    <FormControlLabel
                        value="sangatbaik"
                        control={<Radio />}
                        label="Sangat Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="baik"
                        control={<Radio />}
                        label="Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="cukupbaik"
                        control={<Radio />}
                        label="Cukup Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="tidakbaik"
                        control={<Radio />}
                        label="Buruk"
                        labelPlacement="top"
                    />
                    </RadioGroup>
                    </FormControl>
                    </p>
                </Grid>
                </div>
                <Grid item xs={12} sm={12} sx={{zIndex: 0,}}>
                    <Divider />
                </Grid>
                <div className="survei-form">
                <Grid item xs={12} sm={6} sx={{zIndex: 0, marginRight: 10}}>
                    <p>3. Bagaimana tingkat kepuasan anda terkait kemudahan dalam hal tata cara atau prosedur pelayanan, kepastian pelayanan dan aspek keterbukaan (transparansi) di Dinas Kesehatan Sulawesi Selatan ?</p>
                </Grid>
                <Grid item xs={12} sm={6} sx={{zIndex: 0,}}>
                    <p>
                    <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                    >
                    <FormControlLabel
                        value="sangatbaik"
                        control={<Radio />}
                        label="Sangat Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="baik"
                        control={<Radio />}
                        label="Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="cukupbaik"
                        control={<Radio />}
                        label="Cukup Baik"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="tidakbaik"
                        control={<Radio />}
                        label="Buruk"
                        labelPlacement="top"
                    />
                    </RadioGroup>
                    </FormControl>
                    </p>
                </Grid>
                </div>
                <Grid item xs={12} sm={12} sx={{zIndex: 0,}}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm={12} sx={{zIndex: 0,}}>
                    <p style={{color: '#73726f'}}>Tuliskan komentar/usulan Saudara terhadap kemajuan dan pengembangan pelayanan informasi publik</p>
                </Grid>
                <Grid item xs={12} sm={12} sx={{zIndex: 0,}}>
                    <textarea style={{ height: 'auto', width: '100%'}}/>
                </Grid>
            </div>
            </Grid>
            <div style={{paddingLeft: 40, paddingBottom: 20, }}>
                <Button variant="contained" size="medium" sx={{'&:hover': {backgroundColor: '#F5b400'}, backgroundColor:'#F5b400'}}>Kirim Survei</Button>
            </div>
        </div>
        </>
    )
}

export default Survei;