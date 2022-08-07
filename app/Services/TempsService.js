import { ProxyState } from "../AppState.js";
import { Temp } from "../Models/Temp.js";
import { sandboxApi } from "./AxiosService.js";

class TempsService {
    async getTemps() {
        const res = await sandboxApi.get('/weather')
        console.log('Get Temps', res.data);
        ProxyState.temps = new Temp(res.data)
    }



    convertWeather() {
        weateherService.converWeather()
    }
}

export const tempsService = new TempsService()