import Converter from './converter.js';
import DomUtil from './domUtil.js';
import Utility from './utility.js';

class TitleAndSearch {
    static render(parentElement, data, systemUsed) {
        const element = DomUtil.createElement('div', [
            {key: 'class', value: 'titleAndSearch'}
        ]);
        parentElement.appendChild(element);

        const heading = DomUtil.createElement('h1', [
            {key: 'style', value: 'text-align: left;'}
        ]);
        const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const headingData = `${weekday[
                new Date(
                  Converter.convertTime(data.dt, data.timezone).input
                ).getUTCDay()
            ]}, ${systemUsed == "metric"
              ? parseInt(
                  Converter.convertTime(data.dt, data.timezone)[0].split(
                    ":"
                  )[0]
                )
              : Converter.timeToAMPM(
                  Converter.convertTime(data.dt, data.timezone)[0]
                ).split(":")[0]} :00 ${systemUsed == "imperial"
                    ? Utility.isPM(Converter.convertTime(data.dt, data.timezone)[0])
                    : ""}`
        heading.innerText = headingData;
        element.appendChild(heading);
        
    }
}
export default TitleAndSearch;