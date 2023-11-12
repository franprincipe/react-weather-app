import React from "react"; 
import "./Weather.css";
export default function Weather() {
    return <div className="Weather">
        <form>
        <div className="row">
        <div className="col-9">
            <input 
            type="search"
            placeholder="Search for City..."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" 
            />
            </div>
        </div>
        </form> 
        <h1>Willow Spring</h1>
        <ul>
            <li>Sunday, 01:37</li>
            <li>Mostly Sunny</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Sunny"/>  
                <span className="temperature">16</span>
                <span className="unit">°C</span>
            </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 42%</li>
                <li>Wind: 19 km/h</li>     
            </ul>
        </div>
        </div>
    </div> 
}