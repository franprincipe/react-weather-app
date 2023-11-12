import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";
import axios from "axios"
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            latitude:response.data.coordinates.latitude,
            longitude:response.data.coordinates.longitude,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.dt * 1000), 
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            wind: response.data.wind.speed,
            city: response.data.city
        });
    }

    function search() {
        const apiKey = "26oc32fb0bb79b0843abctf92a0a6446";
        let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }
    function handleCityChange(event) {    
        setCity(event.target.value);
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input 
                type="search" 
                placeholder="Search city"
                className="form-control"
                onChange={handleCityChange}
                />
            </div>
            <div className="col-3">
            <input 
                type="submit" 
                value="Search" 
                className="btn btn-dark w-100"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        
        <DailyForecast coordinates={weatherData.coordinates}  />
    </div>
        );
    } else {
        search();
        return "Loading...";
    }
}