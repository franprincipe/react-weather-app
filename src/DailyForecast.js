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
    <div className="DailyForecast-day">{forecast[0].dt}</div>
        <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
    <div className="DailyForecast-temperatures">
       <span className="DailyForecast-temperature-max">{Math.round(forecast[0].temp.max)}°</span>
       <span className="DailyForecast-temperature-min">{Math.round(forecast[0].temp.min)}°</span>
    </div>
    </div>
    </div>
    </div>
    ); 
  } else {
    let apiKey = "26oc32fb0bb79b0843abctf92a0a6446";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
}
}
    
