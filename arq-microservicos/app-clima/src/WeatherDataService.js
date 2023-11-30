// WeatherDataService.js
const WeatherDataService = () => {
    const getWeather = async (city) => {
      try {
        const data = await ApiService.fetchWeatherData(city);
        return {
            temperature: data.main.temp,
            condition: data.weather[0].description,
        };
      } catch (error) {
          console.error('Erro ao obter dados meteorológicos:', error.message);
          throw error;
      }
    };
  
    return {
      getWeather,
    };
  };
  
  export default WeatherDataService;
  