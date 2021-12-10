import { Button, Container, FormControl, Grid, Input, InputAdornment, InputBase, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { alpacaRegister, dataFetcher } from "../../reduxAssets/features/AlpacaReducer";
import Swal from 'sweetalert2'

export default () => {

  const [ColorValid, setColorValid] = useState("0,0,0");
  const [AlpacaFarm, setAlpacaFarm] = useState("");



  const [yesColor, setyesColor] = useState(false); 
  const [yesFarm, setyesFarm] = useState(false);
  const [yesWeight, setyesWeight] = useState(false);
  const [yesCoast, setyesCoast] = useState(false);
  const [yesName, setyesName] = useState(false);
  const dispatch = useDispatch();



  const colorValidation = (event) => {
    let hex_code = event.target.value.split("");
    let red = parseInt(hex_code[1] + hex_code[2], 16);
    let green = parseInt(hex_code[3] + hex_code[4], 16);
    let blue = parseInt(hex_code[5] + hex_code[6], 16);
    const RGB_Color = `${red}, ${green}, ${blue}`;
    setColorValid(RGB_Color)
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("alpacaName") && data.get("alpacaWeight") > 0 && ColorValid !== "0,0,0" && data.get("alpacaCost") > 0 && AlpacaFarm) {
      dispatch(alpacaRegister({
        alpacaName: data.get("alpacaName"),
        alpacaWeight: data.get("alpacaWeight"),
        alpacaColor: ColorValid,
        alpacaCost: data.get("alpacaCost"),
        alpacaFarm: AlpacaFarm
      }))
      document.getElementById("newAlpacaReg").reset();
    } else if (data.get("alpacaWeight") <= 0 || data.get("alpacaCost") <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please Enter Valid Weight and Cost!",
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please Enter All Fields",
      })
    }
  };



  const spanDisplayer = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (yesColor === false && data.get("alpacaColor") !== "") {
      setyesColor(false);
    } else if (yesColor === true && data.get("alpacaColor") === "") {
      setyesColor(true);
    } else if (yesFarm === false && data.get("alpacaFarm") !== "") {
      setyesFarm(false);
    } else if (yesFarm === true && data.get("alpacaFarm") === "") {
      setyesFarm(true);
    } else if (yesWeight === false && data.get("alpacaWeight") > 0) {
      setyesWeight(false);
    } else if (yesWeight === true && data.get("alpacaWeight") <= 0) {
      setyesWeight(true);
    } else if (yesCoast === false && data.get("alpacaCost") > 0) {
      setyesCoast(false);
    } else if (yesCoast === true && data.get("alpacaCost") <= 0) {
      setyesCoast(true);
    } else if (yesName === false && data.get("alpacaName") !== "") {
      setyesName(false);
    } else if (yesName === true && data.get("alpacaName") === "") {
      setyesName(true);
    }
  }


  return (
    <div>
      <Box
        padding={{ xs: "70px 0px 30px 0px" }}
        width="100%"
        margin="auto"
        sx={{ background: "#0B001F" }}
      >
        <Grid
          padding={{ xs: "0px 8px 0px 8px", sm: "0px 20px 0px 25px" }}
          container
        >
          <Grid item xs={12} color="white" sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontFamily: "'Righteous', cursive" }}
              fontSize={{ xs: "24px", md: "30px" }}
            >
              Upload Aplaca Data{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={5}>
            <Container sx={{ backgroundColor: 'white', padding: '50px 0px', borderRadius: '30px' }}>
              <Box component="form" id='newAlpacaReg' onSubmit={handleSubmit} sx={{ margin: '50px auto' }} width={{ xs: '90%', md: '70%' }} >
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                    onChange={spanDisplayer}
                      // sx={{ background: '#FFEEC2' }}
                      name="alpacaName"
                      error={yesName}
                      required
                      fullWidth
                      type="text"
                      id="alpacaName"
                      label="Alpaca Name"
                      autoFocus
                    />
                    {yesName && <span style={{ color: 'red', fontSize: '12px' }}>! Alpaca Name is required</span>}
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                    onChange={spanDisplayer}
                      // sx={{ background: '#FFEEC2' }}
                      required
                      error={yesWeight}
                      fullWidth
                      type={'number'}
                      id="alpacaWeight"
                      label="Alpaca Weight"
                      name="alpacaWeight"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography>Kg</Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {yesName && <span style={{ color: 'red', fontSize: '12px' }}>! Alpaca Enter The Alpaca Weight </span>}

                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                    onChange={spanDisplayer}
                      // sx={{ background: '#FFEEC2' }}
                      required
                      fullWidth
                      error={yesCoast}
                      type={'number'}
                      id="alpacaCost"
                      label="Alpaca Cost"
                      name="alpacaCost"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography>$</Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {yesCoast && <span style={{ color: 'red', fontSize: '12px' }}>! Please Enter the Coast for Alpaca</span>}

                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      sx={{ background: '#FFEEC2' }}
                      required
                      error={yesColor}
                      fullWidth
                      id="myColor"
                      type="color"
                      label="Choose Color"
                      name="myColor"
                      onChange={colorValidation}
                    />
                    {yesColor && <span style={{ color: 'red', fontSize: '12px' }}>! Please Select the Color </span>}

                  </Grid>
                  <Grid item xs={12}>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Alpaca Farm</InputLabel>
                      <Select
                        onError={yesFarm}
                        // sx={{ background: '#FFEEC2' }}
                        value={AlpacaFarm}
                        label="Choose Alpaca Farm"
                        onChange={(event) => { setAlpacaFarm(event.target.value) }}
                      >
                        <MenuItem value={'Svenssons Alpacor'}>Svenssons Alpacor</MenuItem>
                        <MenuItem value={'Alpacacenter'}>Alpacacenter</MenuItem>
                        <MenuItem value={'Karlssons Farm'}>Karlssons Farm</MenuItem>
                        <MenuItem value={'Imported Alpacas'}>Imported Alpacas</MenuItem>
                      </Select>
                    </FormControl>
                    {yesFarm && <span style={{ color: 'red', fontSize: '12px' }}>! Please Select A Catogory Of Alpaca </span>}

                  </Grid>
                </Grid>
                <center>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, pr: 2, pl: 2, borderRadius: '30px', background: '#2D454F', color: 'white' }}
                  >
                    Upload Now
                  </Button>
                </center>

              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
