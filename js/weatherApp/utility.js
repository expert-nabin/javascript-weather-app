import Converter from './converter.js';

class Utility {

    static  isPM(time){
        let hours = time.split(":")[0];
        if (hours >= 12) {
            return "PM";
        } else {
            return "AM";
        }
    };

    static getWindSpeed(systemUsed, windInMph){
        return systemUsed == "metric" ? windInMph : Converter.mpsToMph(windInMph);
    }

    static  getVisibility(systemUsed, visibilityInKm) {
        return systemUsed == "metric"? (visibilityInKm / 1000).toPrecision(2)
                                                    : Converter.kmToM(visibilityInKm / 1000)
    };

    static  getTime(systemUsed, currentTime, timezone){
        return systemUsed == "metric"
                    ? `${parseInt(Converter.convertTime(currentTime, timezone)[0].split(":")[0])}:${
                        Converter.convertTime(currentTime, timezone)[0].split(":")[1]
                    }`
                    : Converter.timeToAMPM(Converter.convertTime(currentTime, timezone)[0]);
    }
                
    static  getAMPM(systemUsed, currentTime, timezone){
        return systemUsed == "imperial" ? this.isPM(Converter.convertTime(currentTime, timezone)[0]) : "";
    }

    static getTemperatureValue(temperature, systemUsed) {
        const result = `${(systemUsed == "metric") ? Math.round(temperature) : Math.round(Converter.ctoF(temperature))} °${systemUsed == "metric" ? "C" : "F"}`; 
        return result;
    }
}

export default Utility;