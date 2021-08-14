class API {
    static getWeatherData(cityName) {
        try {
            const api_key = 'cc8afd00cb60c72ee1f09c5687f0114c';
            if( !api_key) {
                throw 'API key is missing';
            }
            const url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`;
            return fetch(url).then(response => response.json());
        }
        catch(error) {
            console.log(error);
        }
    }
}

export default API;