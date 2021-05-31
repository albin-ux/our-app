import React from 'react';


export default function FavoriteList(props){

    const favoriteLists = localStorage.getItem('favorites');
    const favoriteList = JSON.parse(favoriteLists) || [];
    const backgroundImage = props.backgroundImage
    

    // const listItems = list.map((lo, index) =>
    // <li key={index}>{lo.location}, {lo.temperature} <img src={lo.img}/></li>
    // );
    const list = []
    for (let i =0; i < favoriteList.length; i++){
        list.push(favoriteList[i])
    }
    console.log(backgroundImage)

    
    

    const listItems = list.map((favoriteList, index) =>
    <div class="card" key={index}>
        <img src={backgroundImage} class="card-img-top" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">{favoriteList.location}</h5> 
        <p class="card-text">{favoriteList.temperature}°C {favoriteList.localTime}</p>
        
        </div>
        </div>
    );
    return(
        <div className="favorite-list">
             <h1>Dina favoriter</h1>
            <hr />
            <ul>
                
                {listItems}
            </ul>

        </div>
    )
}