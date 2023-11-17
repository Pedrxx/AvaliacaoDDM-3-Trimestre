// WeatherComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const WeatherComponent = ({ weatherData }) => {
    return (
        <View>
            <Text>Temperatura: {weatherData.temperature}°C</Text>
            <Text>Condição: {weatherData.condition}</Text>
        </View>
    );
};

export default WeatherComponent;
