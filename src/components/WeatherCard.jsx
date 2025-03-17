import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiFog } from "react-icons/wi";

const getWeatherIcon = (condition) => {
    switch (condition) {
        case "Clear": return <WiDaySunny size={50} />;
        case "Rain": return <WiRain size={50} />;
        case "Snow": return <WiSnow size={50} />;
        case "Clouds": return <WiCloudy size={50} />;
        case "Fog": return <WiFog size={50} />;
        default: return <WiDaySunny size={50} />;
    }
};

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    return (
        <div className="weather-card">
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <p>{weather.weather[0].main}</p>
            {getWeatherIcon(weather.weather[0].main)}
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;