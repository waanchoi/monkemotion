import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from '../components/MainCard';
import { Card, CardContent, Typography } from '@mui/material';
import Box from "@mui/material/Box"
import TagCard from "../components/TagCard"
import InstructionCard from "../components/InstructionCard"

function CollaborateCard() {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid
                container
                direction={"row"}
                justifyContent={"space-between"} columnSpacing={5}>
                <TagCard />
                <InstructionCard />
            </Grid>
        </Box>
    );
}

export default CollaborateCard;