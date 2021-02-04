import React from 'react';
import './Home.css'
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {PageHeader} from "antd";
import {blue} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    par:{
        textAlign:'center',
        color:blue,

    }
}));


const Navigation = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><NavLink to="/app"> Blog </NavLink></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}> <NavLink to="/home"> Main </NavLink></Paper>
                </Grid>
            </Grid>
            <div className={classes.par}>
            <p> Do not judge so strictly. This is not professional verstka</p>
            </div>

        </div>
    );
}

export default Navigation;