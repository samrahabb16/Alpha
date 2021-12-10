import { Grid } from '@mui/material';
import React from 'react';
import { Hypnosis } from "react-cssfx-loading";
const Loader = () => {
    return (
        <Grid container alignItems={'center'} justify={'center'} width='100%' height='100vh'>
            <Grid item xs={12} textAlign='center'>
             
                    {/* <img src="./loader.png" alt="Loading..." /> */}
                    <center>
                    <Hypnosis color="#CC03ED" width="200px" height="200px" duration="3s" />
                    </center>
               
            </Grid>
        </Grid>
    );
}

export default Loader;
