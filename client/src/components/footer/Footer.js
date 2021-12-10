import { Container, Grid, Typography, } from "@mui/material"
import { Box } from "@mui/system"
import './footer.css'
import MuiAlert from '@mui/material/Alert';
import React from 'react'
// Image import
import Img from './back.png'
import { Link } from "react-router-dom";

export default () => {
    return (
        <div id="contact">
            <Box padding={{ xs: "30px 0px" }} width="100%" margin="auto" sx={{ backgroundImage: `url(${Img})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                <Container sx={{ padding: "10px 0px", marginTop: "60px", color: "#DCCCE4", borderTop: "1px solid #000000" }}>
                    <Grid container maxWidth='sm' margin={'auto'} textAlign={{ xs: "center", sm: "center" }} justifyContent="space-around" >

                        <Grid item  style={{ textAlign: "center" }}>
                            <Typography
                                paragraph
                                fontSize={{ xs: "15px", md: "14px" }}
                            >
                                <Link
                                    className='navItems'
                                    to='/'
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Home
                                </Link>
                            </Typography>
                        </Grid>


                        <Grid item  style={{ textAlign: "center" }}>
                            <Typography
                                paragraph
                                fontSize={{ xs: "15px", md: "14px" }}
                            >
                                <Link
                                    className='navItems'
                                    to='./addalpaca'
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Upload
                                </Link>
                            </Typography>
                        </Grid>



                        <Grid item style={{ textAlign: "center" }}>
                            <Typography
                                paragraph
                                fontSize={{ xs: "15px", md: "14px" }}
                            >
                                <Link
                                    className='navItems'
                                    to='./listalpaca'
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    History
                                </Link>
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
