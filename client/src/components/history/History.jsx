import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DenseTable from "./Histroytable";
// Images Import
import Summary from "./Summary";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataFetcher } from "../../reduxAssets/features/AlpacaReducer";



export default () => {
  const dispatch = useDispatch();
  dispatch(dataFetcher())

  const dataSet = useSelector(state => state.AlpacaReducer.allAlpaca);

  const [SelectedAlpacas, setSelectedAlpacas] = React.useState([]);
  let [TotalBill, setTotalBill] = React.useState(0);
  const costSetter = ({ alpacaWeight, alpacaFarm }) => {
    if (alpacaFarm === "Svenssons Alpacor") {
      return (alpacaWeight * 1.3)
    } else if (alpacaFarm === "Alpacacenter") {
      return (alpacaWeight * 4)
    } else if (alpacaFarm === "Karlssons Farm") {
      return (alpacaWeight * 8.6)
    } else if (alpacaFarm === "Imported Alpacas") {
      return (alpacaWeight * 7.2)
    }
  }
  const billSetter = (event, alpaca) => {
    const { alpacaWeight, alpacaFarm } = alpaca;
    if (event.target.checked) {
      setSelectedAlpacas([...SelectedAlpacas, alpaca]);
      if (alpacaFarm === "Svenssons Alpacor") {
        setTotalBill(TotalBill + (alpacaWeight * 1.3));
      } else if (alpacaFarm === "Alpacacenter") {
        setTotalBill(TotalBill + (alpacaWeight * 4));
      } else if (alpacaFarm === "Karlssons Farm") {
        setTotalBill(TotalBill + (alpacaWeight * 8.6));
      } else if (alpacaFarm === "Imported Alpacas") {
        setTotalBill(TotalBill + (alpacaWeight * 7.2));
      }

    } else {
      setSelectedAlpacas(SelectedAlpacas.filter(thisAlpaca => thisAlpaca._id !== alpaca._id));
      if (alpacaFarm === "Svenssons Alpacor") {
        setTotalBill(TotalBill - (alpacaWeight * 1.3));
      } else if (alpacaFarm === "Alpacacenter") {
        setTotalBill(TotalBill - (alpacaWeight * 4));
      } else if (alpacaFarm === "Karlssons Farm") {
        setTotalBill(TotalBill - (alpacaWeight * 8.6));
      } else if (alpacaFarm === "Imported Alpacas") {
        setTotalBill(TotalBill - (alpacaWeight * 7.2));
      }
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
              Alpca History{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={5}>
            <DenseTable
              TotalBill={TotalBill}
              setTotalBill={setTotalBill}
              costSetter={costSetter}
              billSetter={billSetter}
              dataSet={dataSet}
            />
          </Grid>
          <Grid item xs={12} mt={5}>
            {
              SelectedAlpacas.length > 0 ? <Summary
                SelectedAlpacas={SelectedAlpacas}
                TotalBill={TotalBill}
              /> : null
            }
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
