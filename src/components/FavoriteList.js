import React from 'react';

export default function FavoriteList(props){

    const favoriteLists = localStorage.getItem('favorites');
    const favoriteList = JSON.parse(favoriteLists) || [];
    const list = []
    for (let i =0; i < favoriteList.length; i++){
        list.push(favoriteList[i])
    }
    const listItems = list.map((favoriteList, index) =>
    <li key={index}>{favoriteList.location}, {favoriteList.temperature}°C {favoriteList.localTime}, <button onClick={(e) => {
        removeItem(e)
    }}>X</button></li>
    );

    function removeItem(e) {
        console.log("hello")
        this.setState({data: this.state.favorites.filter(function(favorite){
          return favorite !== e.target.value
        })})
        }

    function deleteItem() {
        for (let i = 0; i < favoriteList.length; i++){
            console.log(i)
        }
    }
    return(
        <div className="favorite-list">
            <ul id="list-parent">
                <button onClick={(e) => props.addToFavorites(e)}>Add to Favorite</button>
                {listItems}
            </ul>
        </div>
    )
}