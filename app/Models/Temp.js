export class Temp {
  constructor(data) {
    this.temp = data.temp
    this.name = data.name
  }

  get Template() {
    return `
        <div>
          <div class="d-flex justify-content-end m-3">
            <div class="col-3 p-3">
              <h3 class="text-light">${this.temp}</h3>
              <h4 class="text-light">${this.name}</h4>
            </div>
          </div>
        </div>
        `
  }
}


// const kelvin = 293;
// const celsius = kelvin - 273;
// let fahrenheit = celsius * (9 / 5) + 32;

// fahrenheit = Math.floor(fahrenheit);
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// celsius = Math.floor(celsius);
// console.log(`The temperature is ${celsius} degrees celsius`);