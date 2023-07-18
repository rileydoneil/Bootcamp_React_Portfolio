import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import Project from './Project';


const Projects = ({projects}) => {


    return (
        <Grid container spacing={1}>
            {projects.map((project) => (
                <Project title={project.title} g_link={project.g_link} d_link={project.d_link} img_link={project.img_link} />
            ))}
        </Grid>
    )

}

export default Projects;
