import './App.css';
import React from 'react';
import axios from 'axios';
import DisplayWeather from './components/DisplayWeather.js';
import NavBar from './components/NavBar.js';
import SearchList from './components/SearchList.js';
import FavoriteList from './components/FavoriteList.js';

class App extends React.Component {

  state = {
    favorites: {},
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

  addToFavorites = () => {
    let oldItems = JSON.parse(localStorage.getItem('favorites')) || [];
    oldItems.push(this.state.data);
    localStorage.setItem('favorites', JSON.stringify(oldItems));

    this.setState({ favorites: oldItems })

        //    var list = [];
    //    if (lo.length < 6){
    //         for (let i = 0; i < lo.length; i++) {
    //             console.log("mindre")
    //             list.unshift(lo[i])
    //         }
    //     } else {
    //         lo.shift()
    //         console.log(lo)
    //         let newLo = JSON.stringify(lo)
    //         localStorage.setItem("search", newLo)
    //         for (let i = 0; i < 5; i++) {
    //             list.unshift(lo[i])
    //         }
    //    }
    //     const listItems = list.map((lo, index) =>
    //     <li key={index}>{lo.location}, {lo.temperature} <img src={lo.img}/></li>
    //     );

  }

  // LogThis = () => {
  //   SearchList()
  // }

  change = (value) => {
    this.setState({ inputData: value })
    console.log(this.state.inputData)
  }
  
  changeWeather = async (event) => {
    event.preventDefault();
    const res = await axios.get(`http://api.weatherstack.com/current?access_key=dbc526fa3bd61f4b70be2068175b6afb&query=${this.state.inputData}`)
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

      await this.setState({data:weatherData});
      let oldItems = JSON.parse(localStorage.getItem('search')) || [];
      oldItems.push(weatherData);
      localStorage.setItem('search', JSON.stringify(oldItems));
      
      // this.LogThis()


      // localStorage.setItem(this.state.inputData, JSON.stringify(weatherData));
      // let oldItems = JSON.parse(localStorage.getItem('search')) || [];
      // oldItems.push(weatherData);
      // localStorage.setItem('search', JSON.stringify(oldItems));
    };
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
        axios.get(`http://api.weatherstack.com/current?access_key=dbc526fa3bd61f4b70be2068175b6afb&query=
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
      <div className="App" >
        <NavBar changeWeather = {this.changeWeather} changeRegion={this.change}/>
        <div className="container">
        <div className="row">
        
        </div>
        <div className="row">
        <DisplayWeather weatherData = {this.state.data} backgroundImage = {this.state.backgroundImage}  addToFavorites={this.addToFavorites}/>
        </div>
        <div className ="row">
          <div className="col-md-4">
            <SearchList />
          </div>
          <div className="col-md-8">
            <FavoriteList favorites = {this.state.favorites} backgroundImage = {this.state.backgroundImage} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}
 
export default App;