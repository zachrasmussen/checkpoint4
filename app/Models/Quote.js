
export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get Template() {
    return `
        
        <div class="justify-content-start m-3">
          <div class="p-3">
            <h3 class="text-light">${this.content}</h3>
            <h4 class="on-hover text-light">${this.author}</h4>
          </div>
        </div>
           
        `
  }
}
