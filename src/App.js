import React, {useState, useEffect} from 'react';
import BodyWeather from "./components/bodyweather";
import './App.css';

function App() {

  const [weather, setWeather] = useState({
    name: "",
    sys: "",
    weather: [0],
    main:""
  });

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    if(latitude && longitude){
      const Url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3f1574f306d707fe4b6696b1dc626538`;
      fetch(Url)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);  
  },[])
  
  return (
    <div className="container">
      <BodyWeather weather={weather} />
    </div>
  );
}

export default App;
