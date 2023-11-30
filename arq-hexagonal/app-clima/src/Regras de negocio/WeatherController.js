// WeatherController.js

import OpenWeatherApiService from "../Servico de dados/WeatherDataService";

class WeatherController {
    constructor(weatherDataService) {
      this.weatherDataService = weatherDataService;
    }
  
    async getWeather(city) {
      try {
        const data = await this.weatherDataService.fetchWeatherData(city);
        return new WeatherModel(data.main.temp, data.weather[0].description);
      } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error.message);
        throw error;
      }
    }
  }
  
export default WeatherController;
  