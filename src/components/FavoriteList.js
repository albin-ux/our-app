
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
        <img src={favoriteList.backgroundImage} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{favoriteList.location}</h5> 
            <p className="card-text">{favoriteList.temperature}°C,{favoriteList.description}</p> 
            <button type="button" className="btn btn-danger" onClick={() => {
        for (let i = 0; i < listItems.length; i++){

            if (i === index){
                let newData = JSON.parse(localStorage.getItem("favorites"));
                newData.splice(i, 1)
                localStorage.setItem("favorites", JSON.stringify(newData));
                window.location.reload(true);
                

            }
        }

        
    }}>Delete</button>
    </div>
    </div>
    );

   
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