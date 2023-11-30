// OpenWeatherApiService.js
import WeatherDataService from './WeatherDataService';

class OpenWeatherApiService extends WeatherDataService {
  async fetchWeatherData(city) {
    // Implemente a chamada real à API OpenWeatherMap
    const apiKey = 'SUA_API_KEY';
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

export default OpenWeatherApiService;
