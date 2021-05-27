import React from 'react';

export default function NavBar(props){
    // const [value, setValue] = React.useState('');

    return(
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">VäderPortalen</h1>
            </div>
            <div className="col-md-6">
                <form className="region" onSubmit={(e) => props.changeWeather(e)}>
                    <input className="searchQuery" placeholder="Search here..." onKeyUp={(e) => props.changeRegion(e.target.value)}/>
                </form>
            </div>
        </div>
    );
}