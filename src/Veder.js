import React, {useState, useRef} from 'react';
import axios from 'axios';



export default class GetWeather extends React.Component() {
  const [vedere, setState] = useState([]);
  
   

  componentDidMount() {
    axios.get('http://api.weatherstack.com/current?access_key=9143a0f14c0ad31c963b8c274385e88c&query=seattle')
      .then(response => {
        const apiResponse = response.data;
        console.log(apiResponse)

        
        this.setState({ vedere });

        

      })
  }
  

  render() {
    return (

        <div>
          <label for="stad">Stad</label>
          <input id="stad" className="form-control" placeholder="Sök stad här..." />
          <ul>
            {this.state.vedere.map(vedere => <li>{vedere.location.name}</li>)}
            
          </ul>
        </div>
   
    )
  }
}