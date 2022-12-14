import { ProxyState } from "../AppState.js";
import { Temp } from "../Models/Temp.js";
import { sandboxApi } from "./AxiosService.js";

class TempsService {
    async getTemp() {
        let res = await sandboxApi.get('/weather')
        console.log(res.data.name)
        ProxyState.temp = new Temp(res.data)
    }
}

export const tempsService = new TempsService()