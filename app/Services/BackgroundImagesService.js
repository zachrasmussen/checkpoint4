import { ProxyState } from "../AppState.js"
import { BackgroundImage } from "../Models/BackgroundImage.js"
import { sandboxApi } from "./AxiosService.js"

class BackgroundImageService {

    async getBackgroundImage() {
        const res = await sandboxApi.get('/images')
        // console.log('Get Background', res.data);
        ProxyState.backgroundImage = res.data.largeImgUrl
    }
}

export const backgroundImageService = new BackgroundImageService()