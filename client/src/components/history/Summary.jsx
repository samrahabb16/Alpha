import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";


export default function DenseTable({ TotalBill, SelectedAlpacas }) {
    return (<div>
        <Typography
            sx={{ fontFamily: "'Righteous', cursive", color: 'white', textAlign: 'center' }}
            fontSize={{ xs: "24px", md: "30px" }}
        >
            <span>Summary</span>
        </Typography>
        <Typography sx={{ fontFamily: "'Righteous', cursive", color: 'white', textAlign: 'center' }}
            fontSize={{ xs: "24px", md: "30px" }}
        >Total Bill : {TotalBill}</Typography>

        <TableContainer component={Paper}>
            <Table sx={{ width: 650, margin:'auto' }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{ fontWeight: 'bolder' }}>Alpaca name</TableCell>
                        <TableCell sx={{ fontWeight: 'bolder' }} align="right">Alpaca Farm</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        SelectedAlpacas.map((alpaca, indx) => (
                            <TableRow
                                key={indx}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">  {alpaca.alpacaName}  </TableCell>
                                <TableCell align="right">{alpaca.alpacaFarm}</TableCell>


                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}
