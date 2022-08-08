import { ProxyState } from "../AppState.js";
import { Temp } from "../Models/Temp.js";
import { sandboxApi } from "./AxiosService.js";

class TempsService {
    async getTemp() {
        let res = await sandboxApi.get('/weather')
        console.log(res.data.name)
        ProxyState.temp = new Temp(res.data)
    }

    changeTemp() {
        console.log('tempsService')
        ProxyState.temp.clicked = !ProxyState.temp.clicked
        ProxyState.temp = ProxyState.temp
    }
}

export const tempsService = new TempsService()