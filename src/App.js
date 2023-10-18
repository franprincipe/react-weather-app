import React from 'react';
import Weather from "./Weather";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by Francisca Principe{""}
     {""} and is {""}
        <a href="https://github.com/franprincipe/react-weather-app" alt="Francisca" target="_blank">
          open-sourced 
        </a> on GitHub.
       </footer>
       </div>
    </div>
  );
}


