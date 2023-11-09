import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props){
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

    function handleResponse(response) {
       setForecast(response.data.daily);
       setLoaded(true);
    }

if (loaded) {
    return (
    <div className="DailyForecast">
    <div className="row">
    <div className="col">
    <div className="DailyForecast-day">Thu</div>
        <WeatherIcon code="01d" size={36} />
    <div className="DailyForecast-temps">
         <span className="DailyForecast-temp-max">{forecast[0].temp.max}°</span>
        <span className="DailyForecast-temp-min">{forecast[0].temp.min}°</span>
    </div>
    </div>
    </div>
    </div>
    ); 
  } else {
    let apiKey = "17f4641f07f947e33529ab836920a226";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
}
}
    
