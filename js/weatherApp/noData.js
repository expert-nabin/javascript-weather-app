import Search from './search.js';
import DomUtil from './DomUtil.js';

class NoData {
    static render(parentElement) {
        const element = DomUtil.createElement('div', [{key: 'class', value: 'errScr'}]);

        const innerDiv = DomUtil.createElement('div');
        const heading = DomUtil.createElement('h1', [{key: 'style', value: 'margin-bottom: 30px;'}]);
        heading.innerHTML = 'City not found, try again!';

        innerDiv.appendChild(heading);
        element.appendChild(innerDiv);

        parentElement.appendChild(element);

        Search.render(innerDiv);
    }
}
export default NoData;
