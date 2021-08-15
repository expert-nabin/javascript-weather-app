import DomUtil from './domUtil.js';
import Converter from './Converter.js';
import Utility from './utility.js';

class WeatherWrapper {
    static render(parentElement, data, systemUsed){
        const element = DomUtil.createElement('div', [
            {key: 'class', value: 'weatherWrapper'}
        ]);
        parentElement.appendChild(element);

        const locationTitle = DomUtil.createElement('h1', [
            {key: 'class', value: 'locationTitle'}
        ]);
        locationTitle.innerHTML = `${data.name}, ${data.sys.country}`;
        element.appendChild(locationTitle);

        const weatherDescription = DomUtil.createElement('p', [
            {key: 'class', value: 'weatherDescription'}
        ]);
        weatherDescription.innerText = data.weather[0].description;
        element.appendChild(weatherDescription);


        const weatherIcon = DomUtil.createElement('img', [
            {key: 'src', value: `icons/${data.weather[0].icon}.svg`},
            {key: 'alt', value: data.weather[0].description},
            {key: 'width', value: '300'},
            {key: 'height', value: '300'},
        ]);
        element.appendChild(weatherIcon);

        const mainTemp = DomUtil.createElement('h1', [
            {key: 'class', value: 'mainTemp'}
        ]);
        const temprateureValue = Utility.getTemperatureValue(data.main.temp, systemUsed);
        const mainTempValue = document.createTextNode(temprateureValue);
        mainTemp.appendChild(mainTempValue);
        element.appendChild(mainTemp);

        const feelsLikeParagraph = DomUtil.createElement('p');
        const feelsLikeTemperature = Utility.getTemperatureValue(data.main.feels_like, systemUsed);
        feelsLikeParagraph.innerText = `Feels like ${temprateureValue}`;
        element.appendChild(feelsLikeParagraph);
    }
}
export default WeatherWrapper;