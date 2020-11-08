import React from 'react';

const Weather = props => {

    return (
       <div>
           {!props.message &&
               <div className='infoWeath'>
                   <p>Location: {props.weather.city}, {props.weather.country}</p>
                   <p>Temp: {props.weather.temp}</p>
                   <p>Pressure: {props.weather.pressure}</p>
                   <p>Sunset: {new Date(props.weather.sunset * 1000).toString()}</p>
               </div>
           }
           <p>{props.message}</p>
       </div>
    );
};

export default Weather;