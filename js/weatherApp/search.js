import DomUtil from './domUtil.js';
import API from './api.js';
import WeatherApp from './weatherApp.js';
import constants from './constants.js';
import Loading from './loading.js';

class Search {
    element;
    parentElement;

    static handleSearchInput(event) {
        if(event.key === 'Enter') {
            const inputValue = event.target.value.trim();
            if(inputValue) {
                Loading.render(this.parentElement);
                API.getWeatherData(inputValue).then(data => {
                    this.element.value = '';
                    WeatherApp.render(data, constants.DEFAULT_UNIT);
                });
            }
            else {
                
                this.element.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                console.log('Please enter city name.')
            }
        }
        else {
            this.element.style.backgroundColor = '#ffffff';
        }
    }

    static render(parentElement) {
        this.parentElement = parentElement;
        this.element = DomUtil.createElement('input', [
            {key: 'class', value: 'searchInput'},
            {key: 'placeholder', value: 'Search a city...'}
        ]);
        this.element.addEventListener('keypress', this.handleSearchInput.bind(this))

        parentElement.appendChild(this.element);
    }
}
export default Search;