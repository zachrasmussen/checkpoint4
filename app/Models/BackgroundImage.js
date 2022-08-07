export class BackgroundImage {
    constructor(data) {
        this.largeImgUrl = data.largeImgUrl
    }
    get Template() {
        return `
        url${this.large}
        `
    }
}