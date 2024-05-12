import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = '0688fd031b2dfd134dc5a747bff9d99e';

const ToCelsius = (Kelvin) => {
    return Kelvin - 273.15;
};

const WeatherComponent = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [savedWeatherData, setSavedWeatherData] = useState([]);

    const handleFetchWeather = async () => {
        try {
            const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
            const data = response.data;
            console.log(data);

            const isCityAlreadySaved = savedWeatherData.some((savedData) => savedData.city === data.name);

            if (!isCityAlreadySaved) {
                const updatedSavedData = [
                    {
                        city: data.name,
                        icon: data.weather[0].icon,
                        country: data.sys.country,
                        temperature: ToCelsius(data.main.temp)
                    },
                    ...savedWeatherData.slice(0, 4)
                ];
                setSavedWeatherData(updatedSavedData);
                localStorage.setItem('weatherData', JSON.stringify(updatedSavedData));
            } else {
                console.log('City already saved:', data.name);
            }

            setWeatherData(data);
        } catch (error) {
            console.error('Hava məlumatları alınarkən xəta:', error);
        }
    };

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('weatherData'));
        if (savedData) {
            setSavedWeatherData(savedData.slice(0, 5));
        }
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="Şəhər adını daxil edin"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleFetchWeather}>Hava Məlumatını Al</button>

            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperatur: {ToCelsius(weatherData.main.temp).toFixed(1)}°C</p>
                </div>
            )}

            <h3>Saxlanılan Hava Məlumatları:</h3>
            <div className='weatherCartContainer'>
                {savedWeatherData.map((data, index) => (
                    <div className='weatherCart' key={index}>
                        <h4>{data.city}</h4>
                        <h4>Country: {data.country}</h4>
                        <p>Temperatur: {data.temperature.toFixed(1)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherComponent;
