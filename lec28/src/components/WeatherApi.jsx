import React from 'react';
import axios from 'axios';

const convertDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1 <= 9) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const day = (date.getDate() <= 9) ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${year}-${month}-${day}`;
}

const GetWeather = async ({ latitude, longitude }) => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7); // Adding 7 days

    try {
        const {data:weatherInfo} = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude,
                longitude,
                current_weather: true,
                timezone: 'IST',
                daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
                start_date: convertDate(startDate),
                end_date: convertDate(endDate)
            }
        });

        return weatherInfo; // Assuming API returns data directly
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; // Propagate the error
    }
}

export default GetWeather;
