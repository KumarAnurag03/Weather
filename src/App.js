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
  if(weather) 
  {
    console.log(weather.data.weather[0].main);
    // MyBackgroundImage=`https://source.unsplash.com/1600x900/?${city}`;
    if(weather.data.weather[0].main === "Clouds")
    MyBackgroundImage=`https://www.clearias.com/up/Clouds.jpg`;
    else if(weather.data.weather[0].main === "Rain")
    MyBackgroundImage=`https://www.skymetweather.com/content/wp-content/uploads/2022/06/Rain-in-Northeast-India-FB-3.jpg`;
    else if(weather.data.weather[0].main === "Thunderstorm")
    MyBackgroundImage=`https://images.immediate.co.uk/production/volatile/sites/4/2020/08/GettyImages-NA006117-b5eac24.jpg`;
    else if(weather.data.weather[0].main === "Drizzle")
    MyBackgroundImage=`https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/rain/raindrops-misted-on-a-windscreen.jpg`;
    else if(weather.data.weather[0].main === "Snow")
    MyBackgroundImage=`https://cdn.britannica.com/79/149179-050-DC23D823/snowflake-threads-wool-coat.jpg`;
    else if(weather.data.weather[0].main === "Clear")
    MyBackgroundImage=`https://cdn.pixabay.com/photo/2014/10/03/16/53/refreshing-471950__340.jpg`;
    else if(weather.data.weather[0].main === "Haze")
    MyBackgroundImage=`https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg`;
    else if(weather.data.weather[0].main === "Smoke")
    MyBackgroundImage=`https://1.bp.blogspot.com/-T4Wu8ctCPo0/X1uyv0PRN8I/AAAAAAAA9xQ/fq7_QYyw6KsO4Yndbb1FIn7uAKVfQaO0wCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-09-11%2Bat%2B9.16.03%2BAM.png`;
    else if(weather.data.weather[0].main === "Mist")
    MyBackgroundImage=`https://img.freepik.com/premium-photo/high-fog-mountains-limited-visibility-bad-weather-conditions-driver_105751-14393.jpg`;
    else if(weather.data.weather[0].main === "Fog")
    MyBackgroundImage=`https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/12/cover-image-3-2.jpg`;
    
  }  

  return(
    <div className='app' 
    style={{
      backgroundImage:`url(${MyBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundrepeat: 'no-repeat',
      backgroundPosition: 'center',
      }}>                                                                                                                                                                                                    >
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
                <img className='icon' src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="NULL"/>
                <h3>{weather.data.weather[0].description}</h3>
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
