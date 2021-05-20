import './App.css';
import React from 'react';
import axios from 'axios';
import DisplayWeather from './components/DisplayWeather.js';
import NavBar from './components/NavBar.js';
import SearchList from './components/SearchList.js';

class App extends React.Component {

  state = {
    coords: {
      latitude: 0, 
      longitude: 0
    },
    data: {},
    inputData: "",
    backgroundImage: "",
    staticPicture: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg"
  }

  // console.log(Object.keys())

  change = (value) => {
    this.setState({ inputData: value })
  }


  changeWeather = (event) => {
    event.preventDefault();
    axios.get(`http://api.weatherstack.com/current?access_key=5fd5d1b66b4261ad6a0e710b9a62cb2a&query=${this.state.inputData}`).then(
      res => {
        if (res.data.success === false){
          alert("That place does not exist dude")
          event.preventDefault();
        } else {
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
            img: res.data.current.weather_icons,
            localTime: res.data.location.localtime
          }
  
          this.setState({data:weatherData});
          // localStorage.setItem(this.state.inputData, JSON.stringify(weatherData));
          let oldItems = JSON.parse(localStorage.getItem('search')) || [];
          oldItems.push(weatherData);
          localStorage.setItem('search', JSON.stringify(oldItems));
        };
      }
    )
      axios.get(`https://pixabay.com/api/?key=21704043-f626bbd7c6236b85a4acc11f0&q=${this.state.inputData}&image_type=photo`).then(
          res => {
            if (res.data.hits.length === 0){
              let pixaImage = this.state.staticPicture
              this.setState({backgroundImage:pixaImage})
            } else {
              let pixaImage = res.data.hits[0].largeImageURL
              this.setState({backgroundImage:pixaImage})
            }
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


        axios.get(`https://pixabay.com/api/?key=21704043-f626bbd7c6236b85a4acc11f0&q=yellow+flowers&image_type=photo`).then(
          res => {
            let pixaImage = res.data.hits[0].largeImageURL
            this.setState({backgroundImage:pixaImage})
          }
        )


        //api call
        axios.get(`http://api.weatherstack.com/current?access_key=5fd5d1b66b4261ad6a0e710b9a62cb2a&query=
        ${this.state.coords.latitude},
        ${this.state.coords.longitude}`).then(
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
            img: res.data.current.weather_icons,
            localTime: res.data.location.localtime
          }

          this.setState({data:weatherData});
        })
      });
    }
  }
  render() { 
    return (
      <div className="App">
        <div className="container">
        <NavBar changeWeather = {this.changeWeather} changeRegion={this.change}/>
        <DisplayWeather weatherData = {this.state.data} backgroundImage = {this.state.backgroundImage}/>
        <SearchList />
        </div>
      </div>
    );
  }
}
 
export default App;