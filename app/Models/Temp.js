export class Temp {
  constructor(data) {
    this.name = data.name || ''
    this.temp = data.main.temp || 0
  }

  get Template() {
    return `
        <div class="col-12 d-flex justify-content-end m-3">
          <div class="col-4 p-3">
            <h3 class="text-light text-center">${this.temp}</h3>
            <h4 class="text-light text-center" onclick="app.tempsController.changeTemp()">${this.name}</h4>
          </div>
        </div>
        `
  }
}