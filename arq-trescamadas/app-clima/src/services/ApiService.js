// ApiService.js
import axios from 'axios';

class ApiService {
    static async fetchWeatherData(city) {
        const apiKey = '3a1993bb6e3dd1e8e61c73857eead522';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
}

export default ApiService;
