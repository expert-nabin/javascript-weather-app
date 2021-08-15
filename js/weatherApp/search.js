import DomUtil from './domUtil.js';
import API from './api.js';

class Search {
    element;

    static handleSearchInput(event) {
        if(event.key === 'Enter') {
            const inputValue = event.target.value.trim();
            if(inputValue) {
                API.getWeatherData(inputValue).then(data => {
                    console.log(data);
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
        this.element = DomUtil.createElement('input', [
            {key: 'class', value: 'searchInput'},
            {key: 'placeholder', value: 'Search a city...'}
        ]);
        this.element.addEventListener('keypress', this.handleSearchInput.bind(this))

        parentElement.appendChild(this.element);
    }
}
export default Search;