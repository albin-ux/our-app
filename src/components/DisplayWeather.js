import React from 'react';

export default function DisplayWeather(props) {

    const {location, temperature, description, region,
    country, wind_speed, pressure, precip, humidity, img, localTime} = props.weatherData;

    const backgroundImage = props.backgroundImage

    const lo = localStorage.getItem("favorites")
    let list = []
    list.push(lo)
    const listItems = list.map((lo, index) =>
        <li key={index}>{lo}</li>
    )

    return (
        <div className="user-weather" style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
            <div>
                <ul className="Favorites">
                    {listItems}
                </ul>
            </div>
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature} C, {description}</h1>
                    <h4>{location}</h4>
                    <p>{region}, {country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={img} alt="weather-img"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 weather-info">
                    <p>Wind speed (km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Pressure (millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Precipitation (mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Humidity (%)</p>
                    <h2>{humidity}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p>Local time:</p>
                    <h2>{localTime}</h2>
                </div>
                <div>
                    <button className="favorites" onClick={() =>{
                        console.log(props.weatherData.location)
                        localStorage.setItem("favorites", props.weatherData.location)
                    }}>Add to Favorites</button>
                </div>
            </div>
        </div>
    );

}