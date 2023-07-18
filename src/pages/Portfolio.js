//dependancies
import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//test style
import { tabsStyles } from './elevatedTabs.styles.js';


import Projects from "../components/Projects";

//pictures for dev
import NoteTaker from '../assets/images/Note-Taker.PNG';
import CinemaSearch from '../assets/images/Cinema-Search.PNG';
import TechBlog from '../assets/images/Tech-Blog.PNG';
import WeatherDashboard from '../assets/images/Weather-Dashboard.png';

//pictures for projects
import ImageComingSoon from '../assets/images/image-coming-soon.jpg';

// code from material-ui
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Portfolio = () => {
    // style for tabs
    const classes = tabsStyles();

    // data for dev projects
    const dev = [
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

    // data for life projects
    const hobbies = [
        {
            id: 1,
            title: "Nitro Coffee Kegerator",
            img_link: ImageComingSoon
        },
        {
            id: 2,
            title: "Raspberry Pi DNS Server",
            img_link: ImageComingSoon
        },
        {
            id: 3,
            title: "ProxMox Media Server",
            img_link: ImageComingSoon
        },
        {
            id: 4,
            title: "Cisco Home Lab",
            img_link: ImageComingSoon
        }
    ];

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box 
        sx={{ bgcolor: 'transparent', width: '80%', margin: 'auto'}}>
            <AppBar position="static" background-color='#94A3B3'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    classes={{ root: classes.root }}
                >
                <Tab label="Web Dev Projects" {...a11yProps(0)} />
                <Tab label="Hobby Projects" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabPanel}>
                    <Projects projects={dev} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Projects projects={hobbies} />
                </TabPanel>
            </SwipeableViews>
        </Box>
    )
};

export default Portfolio;