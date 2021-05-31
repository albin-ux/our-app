import React from 'react';

export default function NavBar(props){
    // const [value, setValue] = React.useState('');

    return(
    
        <div className="row">
            <nav class="navbar navbar-dark bg-dark shadow-sm">
            <div className="col-md-4">
                <h1 className="title">VäderPortalen</h1>
            </div>
            <div className="col-md-3">
                <form className="region" onSubmit={(e) => props.changeWeather(e)}>
                    <input className="form-control me-2" placeholder="Search here..." onChange={(e) => props.changeRegion(e.target.value)}/>
                </form>
            </div></nav>
        </div>

       

    );
}