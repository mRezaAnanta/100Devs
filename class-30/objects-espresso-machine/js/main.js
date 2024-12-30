//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeEspressoMachine {
  constructor(brand, color, price, model) {
    this.brand = brand
    this.color = color
    this.price = price
    this.model = model
  }
  turnOn() {
    console.log("Good day, I am now on!")
  }
  shutdown() {
    console.log(`Bye ${this.model}`)
  }
  brew() {
    console.log(`Good stuff coming your way`)
  }
}

let gaggia = new MakeEspressoMachine('Gaggia', 'red', 600, 'Classic Pro')
