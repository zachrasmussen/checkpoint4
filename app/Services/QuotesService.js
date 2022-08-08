import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxApi } from "./AxiosService.js"

class QuotesService {
    async getQuotes() {
        const res = await sandboxApi.get('/quotes')
        // console.log('Get Quotes', res.data);
        ProxyState.quote = new Quote(res.data)
    }
}

export const quotesService = new QuotesService()

