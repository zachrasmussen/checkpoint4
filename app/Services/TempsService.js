import { ProxyState } from "../AppState.js";
import { Temp } from "../Models/Temp.js";
import { sandboxApi } from "./AxiosService.js";

class TempsService {
    setActiveTemp() {
        let farTemp = ProxyState.weather.Temp
        console.log('Far Temp', farTemp)
    }
    async getTemps() {
        const res = await sandboxApi.get('/weather')
        // console.log('Get Temps', res.data);
        ProxyState.temps = new Temp(res.data)
    }

    // async getFarTemp() {
    //     let temp = ProxyState.weather.temp
    //     let farTemp = (temp - 273.15) * 1.8 + 32
    //     console.log('Far Temp', farTemp);
    // }

    // async getCelTemp() {
    //     let temp = ProxyState.weather.temp
    //     let celTemp = temp - 273.15
    //     console.log('Cel Temp', celTemp)
    // }
}

export const tempsService = new TempsService()
