import DomUtil from './domUtil.js';

class Search {
    static render(parentElement) {
        const element = DomUtil.createElement('input', [
            {key: 'class', value: 'searchInput'},
            {key: 'placeholder', value: 'Search a city...'}
        ]);

        parentElement.appendChild(element);
    }
}
export default Search;