import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import Project from './Project';

//pictures
import NoteTaker from '../assets/images/Note-Taker.PNG';
import CinemaSearch from '../assets/images/Cinema-Search.PNG';
import TechBlog from '../assets/images/Tech-Blog.PNG';
import WeatherDashboard from '../assets/images/Weather-Dashboard.png';

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Note Taking with Express",
            g_link: "https://github.com/rileydoneil/Bootcamp_PWA_Text_Editor",
            d_link: "https://notetakingapp1212.herokuapp.com/",
            img_link: NoteTaker
        },
        {
            id: 2,
            title: "Tech Blog",
            g_link: "https://github.com/rileydoneil/Bootcamp_Social_Network_API",
            d_link: "https://mvc-tech-blog-bootcamp-x-d0540789d98c.herokuapp.com/",
            img_link: TechBlog
        },
        {
            id: 3,
            title: "Weather Dashboard",
            g_link: "https://github.com/rileydoneil/Weather_Dashboard",
            d_link: "https://rileydoneil.github.io/Weather_Dashboard/",
            img_link: WeatherDashboard
        },
        {
            id: 4,
            title: "Cinema Search",
            g_link: "https://github.com/rileydoneil/CinemaSearch",
            d_link: "https://jdempe.github.io/CinemaSearch/",
            img_link: CinemaSearch
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
