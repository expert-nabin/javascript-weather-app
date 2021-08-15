import DomUtil from './domUtil.js';
import TitleAndSearch from './titleAndSearch.js';
import SwitchBox from './switchBox.js';

class StatsWrapper {
    static render(parentElement, data, systemUsed) {
        const element = DomUtil.createElement('div', [
            {key: 'class', value: 'statsWrapper'}
        ]);
        parentElement.appendChild(element);

        TitleAndSearch.render(element, data, systemUsed);
        // Stats goes here
        SwitchBox.render(element, data, systemUsed);
    }
}
export default StatsWrapper;