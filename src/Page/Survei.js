import React, {Fragment} from 'react';
import TextField from '@mui/material/TextField';

function Survei(){
    return(
        <>
            <p>
                Survei Pelayanan Publik
            </p>
            <div>
            <Grid container>
                <Grid item xs={12} sm={6} sx={{zIndex: 0}}>
                    <p>
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                    </p>
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default Survei;