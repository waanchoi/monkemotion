import * as React from 'react';
import Box from '@mui/material/Box';
import MainCard from '../components/MainCard';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';
import MainContent from '../MainContent';

import Heading from '../components/Heading';

function About() {
    return (

        <Box sx={{ width: "100%" }}>
            <Heading title={"About"} content={"Learn about what we do."} />
            <Box mt={10}>
                <MainContent img={"https://cdn.freelogodesign.org/files/71166f7ec8f34d319d8611605c3f01d3/thumb/logo_200x200.png?v=0"} title={"What is MONKEMOTION?"} content={"MONKEMOTION is an interactive tool that allows anyone to participate in the collection of monkey and primate images. By locating the eyes, noses, mouths, and ears of monkeys, users can directly contribute to creating a big data base of facial structures of monkeys. The data base is used by an AI that would be used to identify the emotional states of monkeys simply by scanning their faces. It is currently being used in a study - conducted by Carnegie Mellon University - related to olive baboons located at the Seneca Park Zoo."} subtitle={"MONKEMOTION is a combination of the words 'monkey' and 'emotion'."} />
            </Box>

            <Box mt={10}>
                <Box>
                    <Grid container
                    direction = {"row"}
                    justifyContent={"space_between"} columnSpacing={10} rowSpacing={5}>

                        <Grid item xs={12} md={6}>
                            <Card sx={{height:200,width:"100%"}}>
                                <div style={{justifyContent: 'center', textAlign:'center', alignItems:'center', height:200, width:'100%', display:'flex'}}>
                                    <Typography variant='h3'>THE PRIMATE PORTAL</Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{height:200,width:"100%",}}>
                                <CardContent>
                                    <Typography variant='h4'>What is The Primate Portal</Typography>
                                    <Typography variant='subtitle2' paddingBottom={"15px"} color={"#a1a1a1"}>The Primate Portal is a collaborative project by a group of scientists studying the origins and nature of thought.</Typography>
                                    <Typography variant='body1'>
                                        Link to site: <a style={{cursor:'pointer'}} href="https://www.theprimateportal.org/" target="_blank">https://www.theprimateportal.org/</a>
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>

        </Box>
    );
}

export default About;
