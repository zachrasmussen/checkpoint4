import { ProxyState } from "../AppState.js";
import { tempsService } from "../Services/TempsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTemp() {
    let temp = ProxyState.temp
    document.getElementById('temp').innerHTML = ProxyState.temp.Template
}

export class TempsController {
    constructor() {
        ProxyState.on('temp', _drawTemp)
        this.getTemp()
    }

    async getTemp() {
        try {
            await tempsService.getTemp()
        } catch (error) {
            console.error('[Get Temp]', error);
            Pop.error(error)
        }
    }
    changeTemp() {
        console.log('clicked')
        tempsService.changeTemp()
    }
}