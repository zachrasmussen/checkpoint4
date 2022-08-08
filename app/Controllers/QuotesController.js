import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {

    let quote = ProxyState.quote
    // console.log('Template')
    document.getElementById('quote').innerHTML = quote.Template
}

export class QuotesController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        this.getQuotes()
    }

    async getQuotes() {
        try {
            await quotesService.getQuotes()
        } catch (error) {
            console.error('[Get Quotes]', error);
            Pop.error(error)
        }
    }
}
