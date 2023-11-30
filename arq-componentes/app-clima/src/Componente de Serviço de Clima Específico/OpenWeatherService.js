// OpenWeatherService.js
const OpenWeatherService = () => {
    const getWeather = async (city) => {
      // Implemente a chamada real à API OpenWeatherMap
      const apiKey = 'be6f0c6a328a0a9371b8d410242bc18b';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error.message);
        throw error;
      }
    };
  
    return {
      getWeather,
    };
  };
  
  export default OpenWeatherService;
  