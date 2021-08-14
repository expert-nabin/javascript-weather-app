import DomUtil from './domUtil.js';

class WeatherComponent{
    static render(parentElement, data, systemUsed) {
        const element = DomUtil.createElement('div', [{key: 'class', value: 'wrapper'}]);
        parentElement.appendChild(element);

        WeatherWrapper.render(element, data, systemUsed);
    }
}
export default WeatherComponent;