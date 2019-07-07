import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import WeatherMoment from './weatherMoment';
import { useFetch } from "../utils/hooks";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 10,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Weather = () => {
    const classes = useStyles();
    const [weatherData, loading] = useFetch("https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=a675333fccbf6d2d89d2e68a1b5265a2");
    
    if (!weatherData.list) {
        return null;
    }
    
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {Array.from({length: 6}, (x,i) => i).map(i => (
                    <Grid item xs={2}>
                        <WeatherMoment data={weatherData.list[i]}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default Weather