import React, { useEffect, useState } from 'react';
import './weather.css';
import WeatherSummary from './WeatherSummary';
import WeatherRow from './WeatherRow';
import GetWeather from '../components/WeatherApi';

let fetchCoordinates = (callback) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      callback(latitude, longitude);
    },
    (err) => {
      console.log(err);
    }
  );
};

function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [weeklyweather, setweeklyweather] = useState([])
  const [isCelsius, setisCelsius] = useState(true);
  const is_day=0;


  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      fetchCoordinates(async (latitude, longitude) => {
        console.log('Coordinates:', latitude, longitude);
        try {
          const weatherData = await GetWeather({ latitude, longitude });
          console.log('Weather Data:', weatherData);
          setWeatherInfo(weatherData);
          setCoordinates({ latitude, longitude });
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      });
    }
    fetchWeather();
  }, []);

  const isDay = currentTime.getHours() >= 6 && currentTime.getHours() < 18;
  const ConvertToStateVariable(tempWeekWeather)=>{
    const fetchedWeatherInfo = []
    for(let i=0;i<tempWeekWeather.daily.time.length;i++)
      {
        fetchedWeatherInfo.push({
          date: new Date(tempWeekWeather.daily.time[i]),
          maxTemperature:(tempWeekWeather.daily.temperature_2m_max[i]),
          mintemperature:(tempWeekWeather.daily.temperature_2m_min[i]),
          weatherCode:tempWeekWeather.daily.weathercode[i]
        })
      }
      setweeklyweather(fetchedWeatherInfo)
      let currentWeather = tempWeekWeather.current_weather;
      currentWeather.time=new Date(currentWeather.time)
  }

  {

  }
  return (
    <>
      <div className={isDay ? "main" : "main dark"}>
        <div className="weather">
          <h1 className='ui-heading'>Weather Page</h1>
          <button className='ui icon button btn1'>F*</button>
        </div>
        <WeatherSummary />
        <table className={isDay ? "" : "white"}>
          <thead className={isDay ? "" : "white"}>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody className={isDay ? "" : "white"}>
            <WeatherRow  />
            <WeatherRow />
            <WeatherRow />
            <WeatherRow />
            <WeatherRow />
            <WeatherRow />
            <WeatherRow />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Weather;
