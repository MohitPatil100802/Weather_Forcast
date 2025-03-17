const API_HOST = "open-weather13.p.rapidapi.com";
const API_KEY = "3f1b16b20amsha5b8f46de1b4359p1a890ajsn83c70306896f";

export async function fetchWeatherByCity(cityName) {
    try {
        const url = `https://${API_HOST}/city/${cityName}/EN`;
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": VITE_RAPIDAPI_KEY
            }
        };

        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
}
