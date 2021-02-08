import React, { useState }from 'react';

const BodyTheWeather = ({weather}) => {

    const gradosK = weather.main.temp;
    const gradosC = (gradosK -273.15).toFixed(2);
    const gradosF = ((9*(gradosC/5))+32).toFixed(2);
  
    const [degrees, setDegrees] = useState(true)

    const change = () => {
      setDegrees(!degrees)
    }

    const icon = weather.weather[0].icon;
    let srcIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      
  return ( 
    <div className="card">
      <h2>weather api</h2>
      <p>{weather.name}</p>
      <p>{weather.sys.country}</p>
      <div className="iconDescription">
        <img src={srcIcon} alt="hola"></img>
        <p>{weather.weather[0].description}</p>
      </div>
      <button onClick={change}>{degrees ? gradosC+" °C" : gradosF+" °F"}</button>
    </div>
   );
}
 
export default BodyTheWeather;