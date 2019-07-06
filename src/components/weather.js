import React from 'react';
import TempUtils from '../utils/tempUtils';
import DateUtils from '../utils/dateUtils';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import WeatherMoment from './weatherMoment';

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
  

const Weather = ({ weatherData }) => {
    const classes = useStyles();
    

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {Array.from({length: 6}, (x,i) => i).map(i => (
                        <Grid item xs={2}>
                            <WeatherMoment data={weatherData[i]}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
};

export default Weather