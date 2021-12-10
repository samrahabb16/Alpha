import { Button, Container, FormControl, Grid, Input, InputAdornment, InputBase, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { alpacaRegister, dataFetcher } from "../../reduxAssets/features/AlpacaReducer";
import Swal from 'sweetalert2'
import { useForm, Controller } from "react-hook-form";
export default () => {



  const { register, handleSubmit, watch, formState: { errors } } = useForm();









  const [ColorValid, setColorValid] = useState("0,0,0");
  const [AlpacaFarm, setAlpacaFarm] = useState(false);
  const dispatch = useDispatch();



  const colorValidation = (event) => {
    let hex_code = event.target.value.split("");
    let red = parseInt(hex_code[1] + hex_code[2], 16);
    let green = parseInt(hex_code[3] + hex_code[4], 16);
    let blue = parseInt(hex_code[5] + hex_code[6], 16);
    const RGB_Color = `${red}, ${green}, ${blue}`;
    setColorValid(RGB_Color) 
  };



  const handleSubmit2 = (data) => {
    console.log(ColorValid != '0,0,0');
    if (data.alpacaName && data.alpacaWeight > 0 && ColorValid != '0,0,0' && data.alpacaCost > 0 && AlpacaFarm) {
      dispatch(alpacaRegister({
        alpacaName: data.alpacaName,
        alpacaWeight: data.alpacaWeight,
        alpacaColor: ColorValid,
        alpacaCost: data.alpacaCost,
        alpacaFarm: AlpacaFarm
      }))
     
      document.getElementById("newAlpacaReg").reset();
    } else if (data.alpacaWeight <= 0 || data.alpacaCost <= 0) {
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









              <Box component="form" id='newAlpacaReg' noValidate onSubmit={handleSubmit(handleSubmit2)} sx={{ margin: '50px auto' }} width={{ xs: '90%', md: '70%' }} >
                <Grid container spacing={2}>









                  <Grid item xs={12} >
                    <TextField
                      // sx={{ background: '#FFEEC2' }}
                      name="alpacaName"
                      fullWidth
                      error={errors.alpacaName}
                      type="text"
                      id="alpacaName"
                      label="Alpaca Name"
                      {...register("alpacaName", { required: true, min: 18, max: 99 })}
                    />
                    {errors.alpacaName && <span style={{ color: 'red', fontSize: '11px', marginBottom: '10px', display: 'inline-block' }}>This field is required</span>}
                  </Grid>









                  <Grid item xs={12} >
                    <TextField
                      // sx={{ background: '#FFEEC2' }}
                      required
                      fullWidth
                      type={'number'}
                      error={errors.alpacaWeight}
                      id="alpacaWeight"
                      label="Alpaca Weight"
                      name="alpacaWeight"
                      defaultValue={0}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography>Kg</Typography>
                          </InputAdornment>
                        ),
                      }}
                      {...register("alpacaWeight", { required: true, min: 1 })}
                    />
                    {errors.alpacaWeight && <span style={{ color: 'red', fontSize: '11px', marginBottom: '10px', display: 'inline-block' }}>Alpaca Weight can not be Negative</span>}
                  </Grid>









                  <Grid item xs={12} >
                    <TextField
                      // sx={{ background: '#FFEEC2' }}
                      required
                      fullWidth
                      type={'number'}
                      id="alpacaCost"
                      label="Alpaca Cost"
                      name="alpacaCost"
                      error={errors.alpacaCost}
                      defaultValue={0}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography>$</Typography>
                          </InputAdornment>
                        ),
                      }}
                      {...register("alpacaCost", { required: true, min: 1 })}
                    />
                    {errors.alpacaCost && <span style={{ color: 'red', fontSize: '11px', marginBottom: '10px', display: 'inline-block' }}>Alpaca Weight can not be Negative</span>}
                  </Grid>










                  <Grid item xs={12}>
                    <center>
                      <input
                        required
                        id="myColor"
                        type="color"
                        defaultValue={ColorValid}
                        error={errors.myColor}
                        label="Choose Color"
                        name="myColor"
                        onChange={colorValidation}
                        // onChange={colorValidation} 
                      />
                    </center>
                    {errors.myColor && <span style={{ color: 'red', fontSize: '11px', marginBottom: '10px', display: 'inline-block' }}>Choose Color </span>}
                  </Grid>













                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="AlpacaFarm">Select Alpaca Farm</InputLabel>
                      <Select
                        // sx={{ background: '#FFEEC2' }}
                        value={AlpacaFarm}
                        label="Choose Alpaca Farm"
                        name="AlpacaFarm"
                        error={!AlpacaFarm} 
                        onChange={(event) => { setAlpacaFarm(event.target.value) }}
                      >
                        <MenuItem value={'Svenssons Alpacor'}>Svenssons Alpacor</MenuItem>
                        <MenuItem value={'Alpacacenter'}>Alpacacenter</MenuItem>
                        <MenuItem value={'Karlssons Farm'}>Karlssons Farm</MenuItem>
                        <MenuItem value={'Imported Alpacas'}>Imported Alpacas</MenuItem>
                      </Select>
                    </FormControl>
                    {!AlpacaFarm && <span style={{ color: 'red', fontSize: '11px', marginBottom: '10px', display: 'inline-block' }}>Choose Color </span>}

                  </Grid>






                </Grid>
                {/* main grid end s */}





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
