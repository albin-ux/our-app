import React from 'react';



class SearchList extends React.Component{
    // state = {
    //     data: localStorage.getItem("search")
    // }    


    render(){
        // const data= state.data;
        // hej = JSON.parse(state.data)
        // console.log(hej)
        // const map1 = data.map((item, index)=>{
        //     console.log(item)
        //     console.log(index)
        const location = localStorage.getItem("search");
        const lo = JSON.parse(location)
        console.log(lo)
        console.log(lo.location)
        return(
            <div>hello</div>
        );
        }
}

export default SearchList;

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