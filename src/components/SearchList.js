import React from 'react';

export default function SearchList(){

    const searchLists = localStorage.getItem('search');
    const searchList = JSON.parse(searchLists) || [];

    const list = []
    for (let i =0; i < searchList.length; i++){
        list.unshift(searchList[i])
    }

    const listItems = list.map((searchList, index) =>
        <li key={index}>{searchList.location}, {searchList.temperature}°C {searchList.localTime}</li>
    );

    return(
        <div className="search-list">
            <h1>Senast Sökta</h1>
            <hr />
            {listItems}
        </div>
    )
}


// class SearchList extends React.Component{
    // state = {
    //     data: localStorage.getItem("search")
    // }    


    // render(){
        // const data= state.data;
        // hej = JSON.parse(state.data)
        // console.log(hej)
        // const map1 = data.map((item, index)=>{
        //     console.log(item)
        //     console.log(index)


    //     const location  = localStorage.getItem("search");
    //     const lo = JSON.parse(location)

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
//         return(
//             <div>
//                 <ul>
//                     {listItems} 
//                 </ul>
//             </div>

//         );
//         }
// }

// export default SearchList;

// export default function SearchList(props) {
    
//     const location = localStorage.getItem("search")
   
//     const lo = JSON.parse(location)
//     console.log(lo)
//     const weatherList = lo;
//     weatherList.forEach(place =>{
        
//     })

//     return(
//         <div>
//             <ul>
//                 <li>{lo.location}</li>
//             </ul>
//         </div>
//     );

// }