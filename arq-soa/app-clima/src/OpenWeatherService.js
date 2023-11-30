// OpenWeatherService.js
import WeatherService from './WeatherService';

class OpenWeatherService extends WeatherService {
  async getWeather(city) {
    // Implemente a chamada real à API OpenWeatherMap
    const apiKey = '80c51a56c7491926b81f6237322f06b6';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter dados meteorológicos:', error.message);
      throw error;
    }
  }
}

export default OpenWeatherService;
