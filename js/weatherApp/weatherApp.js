import API from './api.js';
import NoData from './nodata.js';
import Loading from './loading.js';
import WeatherComponent from './weatherComponent.js';
import constants from './constants.js';

class WeatherApp {
    rootElement;

    static render(data, systemUsed) {
        this.rootElement.innerHTML = null;
        if(!data ||  (data.cod === '404')) {
            NoData.render(this.rootElement);
        }
        else {
            localStorage.setItem('weatherData', JSON.stringify(data));
            WeatherComponent.render(this.rootElement, data, systemUsed);
        } 
    }

    static init(selector) {
        try {
            this.rootElement = document.querySelector(selector);
            if(!this.rootElement) throw `Could not find the element with ${selector}`;

            const systemUsed = constants.DEFAULT_UNIT;

            const weatherData = localStorage.getItem('weatherData');
            if(weatherData) {
                this.render(JSON.parse(weatherData), systemUsed);
            }
            else {
                const defaultCity = constants.DEFAULT_CITY;
            
                Loading.render(this.rootElement);
                API.getWeatherData(defaultCity)
                    .then(data => {
                        Loading.remove(this.rootElement);
                        this.render(data, systemUsed);
                    });
            }
        }
        catch (error){
            console.log(error);
        }
    }
}
export default WeatherApp;