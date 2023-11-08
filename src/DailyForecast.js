import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from 'axios';

export default function DailyForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "17f4641f07f947e33529ab836920a226";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return (
    <div className="DailyForecast">
        <div className="row">
            <div className="col">
              <div className="DailyForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
                <div className="DailyForecast-temps">
                    <span className="DailyForecast-temp-max">19</span>
                    <span className="DailyForecast-temp-min">10</span>
                </div>
            </div>
        </div>
    </div>
    );   
}

    
