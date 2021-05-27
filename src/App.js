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
    inputData: ""
  }

  // console.log(Object.keys())

  change = (value) => {
    this.setState({ inputData: value })
  }


  changeWeather = (event) => {
<<<<<<< HEAD
    event.preventDefault();
    axios.get(`http://api.weatherstack.com/current?access_key=8b6ecd0f6bd379e61e5f66d8c6b1c121&query=${this.state.inputData}`).then(
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
=======
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
>>>>>>> parent of 6fcaf80... lade till pixabaybilderna
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
<<<<<<< HEAD
        axios.get(`http://api.weatherstack.com/current?access_key=8b6ecd0f6bd379e61e5f66d8c6b1c121&query=
=======
        axios.get(`http://api.weatherstack.com/current?access_key=9143a0f14c0ad31c963b8c274385e88c&query=
>>>>>>> parent of 6fcaf80... lade till pixabaybilderna
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
<<<<<<< HEAD
        <DisplayWeather weatherData = {this.state.data} backgroundImage = {this.state.backgroundImage}/>
        <SearchList />
=======
        <DisplayWeather weatherData = {this.state.data} />
>>>>>>> parent of 6fcaf80... lade till pixabaybilderna
        </div>
      </div>
    );
  }
}
 
export default App;