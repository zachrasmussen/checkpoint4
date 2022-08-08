export class Temp {
  constructor(data) {

    this.name = data.name || ''
    this.temp = data.main.temp || 0
    this.clicked = false
  }

  get Template() {
    return `
        <div class="col-12 d-flex justify-content-end m-3">
          <div class="col-4 p-3">
            <h3 class="text-light text-center">${this.convert} <span>${this.clicked ? "C" : "F"}</span></h3>
            <h4 class="text-light text-center" onclick="app.tempsController.changeTemp()">${this.name}</h4>
          </div>
        </div>
        `
  }

  get convert() {
    let temp = 0;
    if (this.clicked) {
      let temperature = this.temp;
      temp = temperature - 273.15;
    } else {
      let temp = this.temp;
      temp = (temp - 273) * 1.8 + 32;
    }
    return Math.round(temp)
  }
}