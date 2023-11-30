// WeatherService.js
import React, { useState, useEffect } from 'react';
import OpenWeatherService from '../Componente de Serviço de Clima Específico/OpenWeatherService';
import WeatherComponent from '../Componente de Interface do Usuário/WeatherComponent';

const WeatherService = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const openWeatherService = new OpenWeatherService();

  const onCityChange = (newCity) => setCity(newCity);

  const onGetWeather = async () => {
    try {
      setLoading(true);
      const data = await openWeatherService.getWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Ao montar o componente, buscar dados meteorológicos para uma cidade padrão
    onGetWeather();
  }, []);

  return (
    <WeatherComponent
      city={city}
      onCityChange={onCityChange}
      onGetWeather={onGetWeather}
      weatherData={weatherData}
      loading={loading}
    />
  );
};

export default WeatherService;
