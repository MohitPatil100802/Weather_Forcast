import { useState } from "react";
import { fetchWeatherByCity } from "./api/api"; // Correct import path
import "./components/styles.css"; // Add this line


function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        if (!city) return alert("Please enter a city name!");

        const data = await fetchWeatherByCity(city);

        if (data) {
            setWeather(data);
        } else {
            setWeather(null);
            alert("City not found. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>🌤 Weather Forecast</h2>
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>

            {weather && (
                <div className="weather-info">
                    <h3>{weather.name}</h3>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Humidity: {weather.humidity}%</p>
                    <p>Wind Speed: {weather.windSpeed} km/h</p>
                </div>
            )}
        </div>
    );
}

export default App;
