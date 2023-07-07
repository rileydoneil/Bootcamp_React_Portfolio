import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { BsFillSendFill, BsGithub } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
}));

function GridItem({ classes, title, g_link, d_link, img_link }) {
    return (
      // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
      // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
      // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>{title}
        <img src={img_link} alt={title} />
        <a href={d_link}><BsFillSendFill /></a>
        <a href={g_link}><BsGithub /></a>
        </Paper>
      </Grid>
    );
}

const Project = ({title, g_link, d_link, img_link }) => {
  const classes = useStyles();

  return (
        <GridItem classes={classes} title={title} g_link={g_link} d_link={d_link} img_link={img_link} />
  );
}

export default Project;