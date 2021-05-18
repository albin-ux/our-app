import './App.css';
import React from 'react';
import axios from 'axios';
import DisplayWeather from './components/DisplayWeather.js';
import NavBar from './components/NavBar.js';

class App extends React.Component {

  state = {
    coords: {
      latitude: 0, 
      longitude: 0
    },
    data: {},
    inputData: ""
  }

  change = (value) => {
    this.setState({ inputData: value })
  }

  changeWeather = (event) => {
    event.preventDefault(); 

    axios.get(`http://api.weatherstack.com/current?access_key=9143a0f14c0ad31c963b8c274385e88c&query=${this.state.inputData}`).then(
      res => {
        let weatherData = {
          location: res.data.location.name,
          temperature: res.data.current.temperature,
          description: res.data.current.weather_descriptions[0],
          region: res.data.location.region,
          country: res.data.location.country,
          wind_speed: res.data.current.wind_speed,
          pressure: res.data.current.pressure,
          precip: res.data.current.precip,
          humidity: res.data.current.humidity,
          img: res.data.current.weather_icons
        }

        this.setState({data:weatherData});
      }
    )
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({ coords:newCoords });

        //api call
        axios.get(`http://api.weatherstack.com/current?access_key=9143a0f14c0ad31c963b8c274385e88c&query=
        ${this.state.coords.latitude},
        ${this.state.coords.longitude}`).then(res => {

          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons
          }

          this.setState({data:weatherData});
        })
      });
    } else {
      console.log("not supported");
    }

  }
  render() { 
    return (
      <div className="App">
        <div className="container">
        <NavBar changeWeather = {this.changeWeather} changeRegion={this.change}/>
        <DisplayWeather weatherData = {this.state.data} />
        </div>
      </div>
    );
  }
}
 
export default App;