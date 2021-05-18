import './App.css';
import React from 'react';

class App extends React.Component {

  componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latidude);
      });
    } else {
      console.log("not supported");
    }

  }

  render() { 
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}
 
export default App;