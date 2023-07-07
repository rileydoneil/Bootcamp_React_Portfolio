import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "PWA Text Editor",
            g_link: "https://github.com/rileydoneil/Bootcamp_PWA_Text_Editor",
            d_link: "",
            img_link: '../assets/images/Note-Taker.png'
        },
        {
            id: 2,
            title: "Social Network API",
            g_link: "https://github.com/rileydoneil/Bootcamp_Social_Network_API",
            d_link: "",
            img_link: "../assets/images/image 2.jpg"
        },
        {
            id: 3,
            title: "ORM E-Commerce Back End",
            g_link: "https://github.com/rileydoneil/Bootcamp_ORM_ECommerce",
            d_link: "",
            img_link: "../assets/images/image 3.jpg"
        },
        {
            id: 4,
            title: "Cinema Search",
            g_link: "https://github.com/rileydoneil/CinemaSearch",
            d_link: "",
            img_link: "./assets/images/image 4.jpg"
        }
    ];

    return (
        <Grid container spacing={1}>
            {projects.map((project) => (
                <Project title={project.title} g_link={project.g_link} d_link={project.d_link} img_link={project.img_link} />
            ))}
        </Grid>
    )

}

export default Projects;
