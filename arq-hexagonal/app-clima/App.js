// App.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import WeatherComponent from './src/Adaptadore de interface/WeatherComponent';
import WeatherController from './src/Regras de negocio/WeatherController';
import OpenWeatherApiService from './src/Servico de dados/WeatherDataService';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const weatherDataService = new OpenWeatherApiService();
  const weatherController = new WeatherController(weatherDataService);

  const onCityChange = (newCity) => setCity(newCity);

  const onGetWeather = async () => {
    try {
      setLoading(true);
      const data = await weatherController.getWeather(city);
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
    <View>
      <Card>
        <WeatherComponent
          city={city}
          onCityChange={onCityChange}
          onGetWeather={onGetWeather}
          weatherData={weatherData}
          loading={loading}
        />
      </Card>
    </View>
  );
};

export default App;
