import API from './api.js';

class WeatherApp {
    static init(selector) {
        try {
            const rootElement = document.querySelector(selector);
            if(!rootElement) throw `Could not find the element with ${selector}`;

            const defaultCity = 'Sydney';
            API.getWeatherData(defaultCity)
                .then(data => {
                    console.log(data);
                });

        }
        catch (error){
            console.log(error);
        }
    }
}
export default WeatherApp;