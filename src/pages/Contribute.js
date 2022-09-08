import * as React from 'react';
import Box from '@mui/material/Box';
import Heading from '../components/Heading';
import CollaborateCard from "../components/CollaborateCard"

function Contribute() {
    return (
        <Box>
            <Heading title={"Contribute"} content={"Be a part of the project."} />
            <Box sx={{ mt: -5 }}>
                <CollaborateCard />
            </Box>
        </Box>
    );
}

export default Contribute;
