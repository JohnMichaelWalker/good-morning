import React, { Component } from "react";
import "./App.css";
import Weather from './components/weather';


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
      <Weather weatherData={this.state.weatherData} />
    );
  }
}

export default App;
