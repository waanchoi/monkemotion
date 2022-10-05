import * as React from 'react';
import Box from '@mui/material/Box';
import Heading from '../components/Heading';
import CollaborateCard from "../components/CollaborateCard"

function Contribute() {
    return (
        <Box>
            <Heading title={"Data Training"} content={"Instructions: Generate new images by clicking on the ‘Generate new image’ button until you are given an image where all facial features are visible. Click on one of the labels on the right before clicking on the corresponding facial features of the monkey in the given image. If any of the facial features of the monkey are not visible, click the ‘Not Visible’ button on the left side.After you pinpoint all the locations of all 6 facial features, press the ‘Submit Data’ button to submit the data."} />
            <Box sx={{ mt: -5 }}>
                <CollaborateCard />
            </Box>
        </Box>
    );
}

export default Contribute;
