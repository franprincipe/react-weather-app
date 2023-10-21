import React, {useState} from "react";
import axios from "axios"
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date:"Wednesday 07:00",
            description: response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input 
                type="search" 
                placeholder="Enter a city"
                className="form-control"/>
            </div>
            <div className="col-3">
            <input 
                type="submit" 
                value="Search" 
                className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
    <div className="row mt-3">
    <div className="col-6">
    
         <img 
            src= {weatherData.iconUrl}
            alt={weatherData.description}
        />
    <br/>
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        
        <span className="unit">°F</span>
    
    
    </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
    </div>
    </div>
        );
    } else {

        const apiKey = "17f4641f07f947e33529ab836920a226";
        
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
       
        return "Loading...";
    }
}