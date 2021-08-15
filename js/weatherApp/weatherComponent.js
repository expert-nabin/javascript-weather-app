import DomUtil from './domUtil.js';
import WeatherWrapper from './weatherWrapper.js';
import StatsWrapper from './statsWrapper.js';

class WeatherComponent{
    static render(parentElement, data, systemUsed) {
        const element = DomUtil.createElement('div', [{key: 'class', value: 'wrapper'}]);
        parentElement.appendChild(element);

        WeatherWrapper.render(element, data, systemUsed);
        StatsWrapper.render(element, data, systemUsed);
    }
}
export default WeatherComponent;