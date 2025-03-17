import axios from 'axios';

export const fetchWeatherByCity = async (city) => {
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
            location: city,
            format: 'json',
            u: 'c'  // 'c' for Celsius, 'f' for Fahrenheit
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        if (response.data && response.data.current_observation) {
            return {
                name: response.data.location.city,
                temperature: response.data.current_observation.condition.temperature,
                humidity: response.data.current_observation.atmosphere.humidity,
                windSpeed: response.data.current_observation.wind.speed
            };
        } else {
            throw new Error("City not found.");
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
};
