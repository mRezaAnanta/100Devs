//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function ProSkater(name, brand, skaterColor, specialMove) {
  this.name = name
  this.brand = brand
  this.skaterColor = skaterColor
  this.specialMove = specialMove
  this.intro = function () {
    console.log(`My name is ${this.name}`)
  }
  this.jump = function () {
    console.log(`YEEEHAAAAW`)
  }
  this.tricks = function () {
    console.log(`${this.specialMove} is unbeatable!`)
  }
}

let malcolmX = new ProSkater("Malcolm X", "Nike", "Blue", "Fly High")
