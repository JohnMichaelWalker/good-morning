import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FinanceChart from './financeChart';
import { useFetch } from "../utils/hooks";

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,
    padding: 10,
    },
    paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
}));


const Finance = () => {
    const classes = useStyles();
    const [financeData, loading] = useFetch("https://api.vanguard.com/rs/gre/gra/1.7.0//datasets/urd-product-port-specific-price-history.jsonp?vars=portId:9232,issueType:S,startDate:2018-07-07,endDate:2019-07-07");
    

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h5">
                    +1.05%
                </Typography>
                <FinanceChart data2={financeData} />
            </Paper>
        </div>
    );
}

export default Finance;
