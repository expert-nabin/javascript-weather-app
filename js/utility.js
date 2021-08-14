import Converter from './converter.js';

class Utility {

    isPM(time){
        let hours = time.split(":")[0];
        if (hours >= 12) {
            return "PM";
        } else {
            return "AM";
        }
    };

    getWindSpeed(systemUsed, windInMph){
        return systemUsed == "metric" ? windInMph : Converter.mpsToMph(windInMph);
    }

    getVisibility(systemUsed, visibilityInKm) {
        return systemUsed == "metric"? (visibilityInKm / 1000).toPrecision(2)
                                                    : Converter.kmToM(visibilityInKm / 1000)
    };

    getTime(systemUsed, currentTime, timezone){
        return systemUsed == "metric"
                    ? `${parseInt(Converter.convertTime(currentTime, timezone)[0].split(":")[0])}:${
                        Converter.convertTime(currentTime, timezone)[0].split(":")[1]
                    }`
                    : Converter.timeToAMPM(Converter.convertTime(currentTime, timezone)[0]);
    }
                
    getAMPM(systemUsed, currentTime, timezone){
        return systemUsed == "imperial" ? this.isPM(Converter.convertTime(currentTime, timezone)[0]) : "";
    }
}

export default Utility;