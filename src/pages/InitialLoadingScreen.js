import * as React from 'react';
import Box from '@mui/material/Box';
import Heading from '../components/Heading';
import CollaborateCard from "../components/CollaborateCard"
import { CircularProgress, Typography } from '@mui/material';

function InitialLoadingScreen() {
    return (
        <Box width={"100vw"} height={"100vh"} backgroundColor={"white"} display={"flex"} flexDirection={'column'} justifyContent="center" alignItems={'center'}>
            <Typography variant={"h1"} color={'primary'}
                sx={{ letterSpacing: "10px" }}
            >Monkemotion</Typography>
            <Box m={10}>
                <CircularProgress />
            </Box>
        </Box>
    );
}

export default InitialLoadingScreen;
