import API from './api.js';
import NoData from './nodata.js';

class WeatherApp {
    rootElement;

    static render(data, systemUsed) {
        if(!data) {
            NoData.render(this.rootElement);
        }
        else {
            console.log({data});
            // this.rootElement
        }
        
    }
    static init(selector) {
        try {
            this.rootElement = document.querySelector(selector);
            if(!this.rootElement) throw `Could not find the element with ${selector}`;

            const defaultCity = 'Sydney';
            const systemUsed = 'metric';
            API.getWeatherData(defaultCity)
                .then(data => {
                    this.render(null, systemUsed);
                });

        }
        catch (error){
            console.log(error);
        }
    }
}
export default WeatherApp;