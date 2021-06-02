import React from 'react';

export default function SearchList(){

    const searchLists = localStorage.getItem('search');
    const searchList = JSON.parse(searchLists) || [];


    var list = [];
    if (searchList.length < 6){
         for (let i = 0; i < searchList.length; i++) {
             list.unshift(searchList[i])
         }
     } else {
         searchList.shift()
         let newLo = JSON.stringify(searchList)
         localStorage.setItem("search", newLo)
         for (let i = 0; i < 5; i++) {
             list.unshift(searchList[i])
         }
    }
    const listItems = list.map((searchList, index) =>
    <div className="list-group">
        <p className="list-group-item">
        <li key={index}>{searchList.location}, {searchList.temperature}°C {searchList.localTime}</li>
    </p>
    </div>
    );

    return(
        <div className="search-list">
            <h2>Senast Sökta</h2>
            <hr />
            {listItems}
        </div>
    )
}


