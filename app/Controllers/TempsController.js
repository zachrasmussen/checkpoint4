import { ProxyState } from "../AppState.js";
import { tempsService } from "../Services/TempsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTemps() {
    let temp = ProxyState.temps
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

    // toggleWeather() {
    //     let far = this.convertFar()
    //     console.log('farTemp', farTemp);

    //     let cel = this.convertCel()
    //     console.log('celTemp', celTemp);
    // }

}