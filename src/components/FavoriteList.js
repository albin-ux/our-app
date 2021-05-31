import React from 'react';

export default function FavoriteList(props){

    const favoriteLists = localStorage.getItem('favorites');
    const favoriteList = JSON.parse(favoriteLists) || [];

    // const listItems = list.map((lo, index) =>
    // <li key={index}>{lo.location}, {lo.temperature} <img src={lo.img}/></li>
    // );
    const list = []
    for (let i =0; i < favoriteList.length; i++){
        list.push(favoriteList[i])
    }

    const listItems = list.map((favoriteList, index) =>
    <li key={index}>{favoriteList.location}, {favoriteList.temperature}°C {favoriteList.localTime}</li>
    );
    return(
        <div className="favorite-list">
            <ul>
                <button onClick={(e) => props.addToFavorites(e)}>Add to Favorite</button>
                {listItems}
            </ul>
        </div>
    )
}