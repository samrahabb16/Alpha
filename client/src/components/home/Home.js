import { Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import card from './Assets/card.png'
import mesh from './Assets/mesh.png'
import left from './Assets/left.jpg'
import right from './Assets/right.jpg'
import center from './Assets/center.jpg'


export default () => {
    return (
        <div id="expertise">
            <Box padding={{ xs: "70px 0px 30px 0px" }} width="100%" margin="auto" sx={{ background: "#0B001F" }}>
                <Grid container>
                    <Grid item xs={12} color="white" sx={{ textAlign: "center" }}>
                        <Typography fontSize={{ xs: "24px", md: "30px" }} sx={{ fontFamily: "'Righteous', cursive" }}>Our Best Alpaca</Typography>
                        {/* <Typography color="#A4A3AC"  margin="15px auto 0px auto" width={{xs:"90%",sm:"51%",lg:"31%"}}>We professionally develop decentralized blockchain App, here is our expertise </Typography> */}

                    </Grid>
                    <Grid item container>
                        <Grid container margin="50px auto 0px auto" width={{ xs: "95%", md: "80%" }} sx={{ backgroundImage: `url(${mesh})` }}>
                            <Grid item xs={12} lg={4}>

                                <Box margin={{ xs: "0px auto 30px auto", lg: "40px auto 0px auto" }} sx={{ maxWidth: "400px", backgroundImage: `url(${card})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", padding: "35px 28px 60px 28px", minHeight: '300px', maxHeight: '300px' }} >
                                    <Box sx={{ width: '60px', height: '60px', borderRadius: '50%', boxShadow: '0px 0px 20px #CC03ED', background: '#CC03ED', margin: 'auto', textAlign: 'center', display: 'table' }}> <span style={{ display: 'table-cell', verticalAlign: 'middle', color: 'white', fontWeight: 'bolder' }}> 01 </span> </Box>

                                    <center><img src={left} alt="left" width="80%" style={{ marginTop:'50px'}} /></center>

                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box margin="0px auto 30px auto" sx={{ maxWidth: "400px", backgroundImage: `url(${card})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", padding: "35px 28px 60px 28px", minHeight: '300px', maxHeight: '300px' }} >
                                    <Box sx={{ width: '60px', height: '60px', borderRadius: '50%', boxShadow: '0px 0px 20px #CC03ED', background: '#CC03ED', margin: 'auto', textAlign: 'center', display: 'table' }}> <span style={{ display: 'table-cell', verticalAlign: 'middle', color: 'white', fontWeight: 'bolder' }}> 02 </span> </Box>

                                    <center><img src={center} alt="center" width="80%" style={{ marginTop:'50px'}} /></center>

                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box margin={{ xs: "0px auto 30px auto", lg: "40px auto 0px auto" }} sx={{ maxWidth: "400px", backgroundImage: `url(${card})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", padding: "35px 28px 60px 28px", minHeight: '300px', maxHeight: '300px' }} >
                                    <Box sx={{ width: '60px', height: '60px', borderRadius: '50%', boxShadow: '0px 0px 20px #CC03ED', background: '#CC03ED', margin: 'auto', textAlign: 'center', display: 'table' }}> <span style={{ display: 'table-cell', verticalAlign: 'middle', color: 'white', fontWeight: 'bolder' }}> 03 </span> </Box>

                                    <center><img src={right} alt="right" width="80%" style={{ marginTop:'50px'}} /></center>

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
