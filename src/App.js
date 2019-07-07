import React, { Component } from "react";
import "./App.css";
import Weather from './components/weather';
import Grid from '@material-ui/core/Grid';
import Finance from "./components/finance";


class App extends Component {
  state = {
    weatherData: []
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=a675333fccbf6d2d89d2e68a1b5265a2")
    .then(res => res.json())
    .then((data) => {
      this.setState({ weatherData: data.list })
    })
    .catch(
    )
  }

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Weather weatherData={this.state.weatherData} />
          </Grid>
          <Grid item xs={8}>
            <Finance />
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default App;
