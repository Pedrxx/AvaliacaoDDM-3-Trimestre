// WeatherController.js
import WeatherModel from './WeatherModel';
import axios from 'axios';


class WeatherController {
  static async fetchWeatherData(city) {
    const apiKey = 'c71ed8cd7830a20511acaa0636d6a20f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // https://api.openweathermap.org/data/2.5/weather?q=$maringa&appid=$c71ed8cd7830a20511acaa0636d6a20f&units=metric

    try {
        const response = await axios.get(apiUrl);
        const { main, weather } = response.data;

        // Retornar os dados relevantes
        return {
            temperature: main.temp,
            condition: weather[0].description,
        };
    } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error.message);
        throw error;
    }
}

  static async getWeather(city) {
    try {
      const data = await fetchWeatherData(city);
      return new WeatherModel(data.main.temp, data.weather[0].description);
    } catch (error) {
      console.error('Erro ao obter dados meteorológicos:', error.message);
      throw error;
    }
  }
}

export default WeatherController;
