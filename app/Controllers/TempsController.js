import { ProxyState } from "../AppState.js";
import { tempsService } from "../Services/TempsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTemps() {

    let temp = ProxyState.temps
    console.log('Template')
    document.getElementById('temp').innerHTML = temp.Template
}

export class TempsController {
    constructor() {
        ProxyState.on('temps', _drawTemps)
        this.getTemps()
    }

    async getTemps() {
        try {
            await tempsService.getTemps()
        } catch (error) {
            console.error('[Get Temps]', error);
            Pop.error(error)
        }
    }

    convertCel() {
        let temp = ProxyState.weather.temp
        let cel = (temp) - 273.15;
        return cel
    }

    convertFar() {
        let temp = ProxyState.weather.temp
        let far = 1.8 * ((temp) - 273) + 32;
        return far
    }

    toggleWeather() {
        let far = this.convertFar()
        console.log('far', far);

        let cel = this.convertCel()
        console.log('cel', cel);
    }

}