import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState(null);
  const [weather, setweather] = useState(null);

  useEffect(() => {
    async function temp(){
      const instance = axios.create();
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7f204b0d1bcb330534811e0d775cd3f7`
       try {
        const response = await instance.get(url);
        console.log(response);
        setweather(response);
       } catch (error) {
        setweather(null);
        console.log(error);
       }
       

    }
    temp();
  
    
  }, [city])

  let MyBackgroundImage='./picture/Screenshot_20230321_130216_WhatsApp.jpg';
  if(weather) MyBackgroundImage=`https://source.unsplash.com/1600x900/?${city}`;

  return(
    <div className='app' 
    style={{backgroundImage:`url(${MyBackgroundImage})`}}>                                                                                                                                                                                                    >
      <div className='search-bar'>
        <input type="search" 
          placeholder='Enter Your City'
           onChange={(e)=>setCity(e.target.value)}
        />
      </div>
      {
        !weather? (
          <h2 id='cent'>No Data found</h2>
        ):
        (
          <div className="app-contain">
            <div className="top">
              <div className="location">
                <h2>{city}</h2>
              </div>
              <div className="temp">
                <h1>{weather.data.main.feels_like}&deg; C</h1>
              </div>
              <div className="desc">
                <h3>{weather.data.weather[0].main}</h3>
              </div>
            </div>
            <div className="bottom">
              <div className="maximum">
                <p>{weather.data.main.temp_max}&deg;C</p>
                <p>Maximum Temperature</p>
              </div>
              <div className="minimum">
                <p>{weather.data.main.temp_min}&deg;C</p>
                <p>Minimum Temperature</p>
              </div>
              <div className="humidity">
                <p>{weather.data.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        )
       }
    </div>
  ); 
}

export default App;
