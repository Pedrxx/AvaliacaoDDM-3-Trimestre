// App.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import WeatherComponent from './src/components/WeatherComponent';
import ApiService from './src/services/ApiService';

const App = () => {
  const [city, setCity] = useState(''); // Estado para armazenar a cidade
  const [weatherData, setWeatherData] = useState({});

  const getWeatherData = async () => {
    try {
      const data = await ApiService.fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Ao montar o componente, buscar dados meteorológicos para uma cidade padrão
    getWeatherData();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Digite a cidade"
        value={city}
        onChangeText={setCity}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <Button
        title="Obter Clima"
        onPress={getWeatherData}
      />
      <WeatherComponent weatherData={weatherData} />
    </View>
  );
};

export default App;
