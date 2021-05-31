
import React from 'react';

export default function FavoriteList(props){

    const favoriteLists = localStorage.getItem('favorites');
    const favoriteList = JSON.parse(favoriteLists) || [];
    const list = []
    for (let i =0; i < favoriteList.length; i++){
        list.push(favoriteList[i])
    }
    const listItems = list.map((favoriteList, index) =>
    <li style={{ backgroundImage: "url(" + favoriteList.backgroundImage + ")" }} key={index}>{favoriteList.location}, {favoriteList.temperature}°C {favoriteList.localTime}, <button onClick={() => {
        for (let i = 0; i < listItems.length; i++){
            // localStorage.removeItem("favorites", i)
            // console.log(i)
            console.log(index)
            if (i === index){
                console.log("matchs")
                let newData = JSON.parse(localStorage.getItem("favorites"));
                console.log(newData)
                newData.splice(i, 1)
                console.log(newData)
                localStorage.setItem("favorites", JSON.stringify(newData));
                window.location.reload(true);
                
                // let element = document.getElementById("list-parent")
                // element.parentNode.removeChild(i)
                // element.removeChild(child)
            }
        }
        // let element = document.getElementById("list-parent");
        // element.parentNode.removeChild()
        
    }}>X</button></li>
    );
// 
    // function removeItem(e) {
    //     console.log("hello")
    //     this.setState({data: this.state.favorites.filter(function(favorite){
    //       return favorite !== e.target.value
    //     })})
    //     }

    // function deleteItem() {
    //     for (let i = 0; i < favoriteList.length; i++){
    //         console.log(i)
    //     }
    // }
   
    return(
        <div className="favorite-list">
            <ul id="list-parent">
                <button onClick={(e) => props.addToFavorites(e)}>Add to Favorite</button>
                {listItems}
            </ul>
        </div>
    )
}