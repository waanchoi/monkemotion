import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box"
import {

    useRecoilState, useResetRecoilState
} from 'recoil';
import { currentLabelRecoil, currentXRecoil, currentYRecoil, dataRecoil } from "../recoil/recoil"


function InstructionCard() {
    const reset = useResetRecoilState(dataRecoil);

    const [currentLabel, setCurrentLabel] = useRecoilState(currentLabelRecoil)
    const [currentX, setCurrentX] = useRecoilState(currentXRecoil)
    const [currentY, setCurrentY] = useRecoilState(currentYRecoil)
    const [data, setData] = useRecoilState(dataRecoil)


    return (

        <Grid item xs={12} md={5}>
            <Card sx={{
                height: 425, width: "100%", overflow: 'auto'
            }}>
                < CardContent >
                    <Typography variant='body1' sx={{ m: 1 }}>Data Values</Typography>

                    <TableContainer component={Paper}>
                        <Table stickyHeader aria-label="simple table"

                            size="small"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Label</TableCell>
                                    <TableCell align="right">x-position</TableCell>
                                    <TableCell align="right">y-position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(data).map((label) => (
                                    <TableRow
                                        key={label}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            backgroundColor: currentLabel == label ? "#4b6587" : "white",
                                            height: currentLabel === label ? 70 : 50,
                                            transition: "200ms"

                                        }}

                                    >
                                        <TableCell component="th" scope="row">
                                            <Button variant={label === currentLabel ? 'contained' : 'outlined'} size="small" color={label === currentLabel ? 'secondary' : 'primary'} onClick={() => { setCurrentLabel(label) }}>
                                                <Typography variant='subtitle2' color='primary' >{label}</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right"><Typography color={label === currentLabel ? 'secondary' : 'primary'} sx={{ fontWeight: label === currentLabel ? 'bold' : '400' }}>{data[label].x}</Typography></TableCell>
                                        <TableCell align="right"><Typography color={label === currentLabel ? 'secondary' : 'primary'} sx={{ fontWeight: label === currentLabel ? 'bold' : '400' }}>{data[label].y}</Typography></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </CardContent>
            </Card >
            <Box display={"flex"} justifyContent={"flex-end"} sx={{ mr: -1, mt: 1 }}>
                <CardActions>
                    <Button variant='outlined' size="small" onClick={() => { reset() }}>Reset</Button>
                </CardActions>
            </Box>
        </Grid >

    );
}

export default InstructionCard;
