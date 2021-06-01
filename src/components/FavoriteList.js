
import React from 'react';


export default function FavoriteList(props){

    const favoriteLists = localStorage.getItem('favorites');
    const favoriteList = JSON.parse(favoriteLists) || [];
    const list = []
    for (let i =0; i < favoriteList.length; i++){
        list.push(favoriteList[i])
    }
    const listItems = list.map((favoriteList, index) =>
    <div className="card" key={index}>
        <img src={favoriteList.backgroundImage} class="card-img-top" alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">{favoriteList.location}</h5> 
            <p class="card-text">{favoriteList.temperature}°C {favoriteList.localTime}</p> 
            <button onClick={() => {
        
        
        
        for (let i = 0; i < listItems.length; i++){
            // localStorage.removeItem("favorites", i)
            // console.log(i)
            if (i === index){
                let newData = JSON.parse(localStorage.getItem("favorites"));
                newData.splice(i, 1)
                localStorage.setItem("favorites", JSON.stringify(newData));
                window.location.reload(true);
                
                // let element = document.getElementById("list-parent")
                // element.parentNode.removeChild(i)
                // element.removeChild(child)
            }
        }
        // let element = document.getElementById("list-parent");
        // element.parentNode.removeChild()
        
    }}>X</button>
    </div>
    </div>
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
             <h2>Dina favoriter</h2>
            <hr />
            <ul>
                
                {listItems}
            </ul>

        </div>
    )
}