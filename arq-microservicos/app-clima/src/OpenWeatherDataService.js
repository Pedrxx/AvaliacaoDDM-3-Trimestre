// OpenWeatherDataService.js
const OpenWeatherDataService = () => {
    const getWeather = async (city) => {
      // Implemente a chamada real à API OpenWeatherMap
      const apiKey = 'faab4cb634a7698067455123b1c133f7';
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
  
  export default OpenWeatherDataService;
  