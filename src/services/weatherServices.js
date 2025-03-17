import axios from "axios";

const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${API_URL}/city/${city}`, {
            headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data", error);
        return null;
    }
};