// App.js

// Componente Principal

import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import WeatherService from './src/Componente de Serviço de Clima/WeatherService';

const App = () => {
  return (
    <View>
      <Card>
        <WeatherService />
      </Card>
    </View>
  );
};

export default App;
