import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TempUtils from '../utils/tempUtils';
import DateUtils from '../utils/dateUtils';
import WeatherUtils from '../utils/weatherUtils';

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
}));


const WeatherMoment = ({ data }) => {
    const classes = useStyles();
    
    if (data) {
        return (
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <img className={classes.img} alt="complex" src={WeatherUtils.getWeatherIconUrl(data.weather[0].icon)} />
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    {DateUtils.toUkDate(data.dt).toTimeString().substring(0, 5)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    {TempUtils.kelvinToCelsius(data.main.temp).toFixed(0) + "°C" }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography  variant="subtitle1">
                            {data.weather[0].description}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    } else {
        return null
    }
    
};

export default WeatherMoment