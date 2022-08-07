import { ProxyState } from "../AppState.js";
import { backgroundImageService } from "../Services/BackgroundImagesService.js";


function _drawBackgroundImage() {
    let backgroundImage = ProxyState.backgroundImage
    // console.log('did this work!?!?!')
    if (!backgroundImage) {
        return
    }

    document.body.style.backgroundImage = `url(${backgroundImage})`

}


export class BackgroundImagesController {
    constructor() {
        ProxyState.on('backgroundImage', _drawBackgroundImage)
        this.getBackgroundImage()
    }

    async getBackgroundImage() {
        try {
            await backgroundImageService.getBackgroundImage()
        } catch (error) {
            console.error('[Get Background]', error);
            Pop.error(error)
        }
    }
}


