// App.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import WeatherController from './src/WeatherController';
import WeatherComponent from './src/WeatherView';


const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
    try {
      setLoading(true);
      const data = await WeatherController.getWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Ao montar o componente, buscar dados meteorológicos para uma cidade padrão
    getWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <TextInput
          placeholder="Digite a cidade"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
        <Button
          title="Obter Clima"
          onPress={getWeatherData}
        />
        <WeatherComponent weatherData={weatherData} loading={loading} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
  },
});

export default App;
