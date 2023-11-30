// WeatherComponent.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

const WeatherComponent = ({ city, onCityChange, onGetWeather, weatherData, loading }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite a cidade"
        value={city}
        onChangeText={onCityChange}
        style={styles.input}
      />
      <Button title="Obter Clima" onPress={onGetWeather} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.weatherText}>
            Temperatura: {weatherData.temperature}°C
          </Text>
          <Text style={styles.weatherText}>
            Condição: {weatherData.condition}
          </Text>
        </View>
      )}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default WeatherComponent;
