import DomUtil from './domUtil.js';
import WeatherApp from './weatherApp.js';

class SwitchBox {
    data; 

    static switchUnit(event) {
        const selectedElementValue = event.target.innerText;
        let systemUsed;
        switch(selectedElementValue) {
            case 'Metric System':
                systemUsed = 'metric';
                break;
            case 'Imperial System':
                systemUsed = 'imperal';
                break;
            default:
        }
        if(systemUsed) {
            WeatherApp.render(this.data, systemUsed);
        }
    }

    static render(parentElement, data, systemUsed) {
        this.data = data;
        const element = DomUtil.createElement('div', [
            {key: 'class', value: 'switchBox'}
        ]);
        parentElement.appendChild(element);

        const metricElement = DomUtil.createElement('p', [
            {key: 'class', value: 'switch'}
        ]);
        metricElement.innerText = 'Metric System';
        if(systemUsed === 'metric') {
            metricElement.setAttribute('style', 'color: green');
        }
        metricElement.addEventListener('click', this.switchUnit.bind(this));
        element.appendChild(metricElement);

        const imperialElement = DomUtil.createElement('p', [
            {key: 'class', value: 'switch'}
        ]);
        imperialElement.innerText = 'Imperial System';
        if(systemUsed === 'imperal') {
            imperialElement.setAttribute('style', 'color: green');
        }
        imperialElement.addEventListener('click', this.switchUnit.bind(this));
        element.appendChild(imperialElement);
    }
}
export default SwitchBox;