import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import { Box } from "@mui/system";


export default function DenseTable({ costSetter, dataSet, billSetter, }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontWeight: 'bolder' }}>Alpaca name</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }} align="right">Weight(KG)</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }} align="right">Alpaca color</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }} align="right">Alpaca cost</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }} align="right">Selected Alpaca</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            dataSet.map((alpaca, indx) => (
              <TableRow
                key={indx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">  {alpaca.alpacaName}  </TableCell>
                <TableCell align="right">{alpaca.alpacaWeight} KG </TableCell>
                <TableCell align="right">
                  <Box sx={{ backgroundColor: `rgb(${alpaca.alpacaColor})`, width: "40px", height: "40px", float: 'right' }}></Box>
                </TableCell>
                <TableCell align="right">{costSetter(alpaca)} SEK</TableCell>
                <TableCell align="right">
                  <Checkbox onClick={(event) => { billSetter(event, alpaca) }} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
