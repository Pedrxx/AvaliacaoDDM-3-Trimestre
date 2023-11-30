// WeatherComponent.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const WeatherComponent = ({ weatherData, loading }) => {
  return (
    <View>
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

const styles = {
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
};

export default WeatherComponent;
