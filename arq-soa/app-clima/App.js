// App.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import WeatherComponent from './src/WeatherComponent';
import OpenWeatherService from './src/OpenWeatherService';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const weatherService = new OpenWeatherService();

  const onCityChange = (newCity) => setCity(newCity);

  const onGetWeather = async () => {
    try {
      setLoading(true);
      const data = await weatherService.getWeather(city);
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
