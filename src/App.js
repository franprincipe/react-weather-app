import React from 'react';
import Weather from "./Weather";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity = "Willow Spring" />
      <footer>
        This project was coded by Francisca Principe{""}
     {""} and is {""}
        <a href="https://github.com/franprincipe/react-weather-app" alt="Francisca" target="_blank">
          open-sourced 
        </a> on GitHub and hosted on {" "}
        <a href="https://app.netlify.com/sites/papaya-mandazi-ba12af/deploys" alt="Netlify" target="_blank">
          Netlify
        </a>
        .
       </footer>
       </div>
    </div>
  );
}


