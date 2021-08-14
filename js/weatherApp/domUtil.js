class DomUtil {
    static createElement(tag, attributes) {
        const element = document.createElement(tag);
        if(attributes && attributes.length) {
            attributes.forEach(attribute => {
                element.setAttribute(attribute.key, attribute.value);
            });
        }
        return element;
    }
}

export default DomUtil;