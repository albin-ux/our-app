import React from 'react';

export default function FavoriteList(props){

    // const {location, temperature, description, region,
    //     country, wind_speed, pressure, precip, humidity, img, localTime} = props.weatherData;

    // addToFavorites = () => {
    //     console.log("hello")
       
    // } 
    const [todos, setTodos] = useState([]);
    return(
        <div>
            <ul>
                <button onClick={(e) => props.addToFavorites(e)}>Add to Favorite</button>
                <li>List Item</li>
            </ul>
        </div>
    )
}