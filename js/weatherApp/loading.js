import DomUtil from './domUtil.js';

class Loading {
    element;

    static remove(parentElement) {
        parentElement.innerHTML = null;
    }

    static render(parentElement) {
        this.element = DomUtil.createElement('div', [
            {key: 'class', value: 'errScr fixed-position'}
        ]);

        const heading = DomUtil.createElement('h1');
        heading.innerText = 'Loading data...';
        this.element.appendChild(heading);

        parentElement.appendChild(this.element);
    }
}

export default Loading;