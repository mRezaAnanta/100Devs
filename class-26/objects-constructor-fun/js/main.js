//Create a constructor with 4 properties and 3 methods
function MakeComputer(brand, mouse, screen, operatingSystem) {
  this.brand = brand
  this.mouse = mouse
  this.screen = screen
  this.operatingSystem = operatingSystem
  this.openSesame = function () {
    console.log("Hello World!")
  }
  this.shutdown = function () {
    console.log(`Bye ${operatingSystem}`)
  }
  this.spec = function () {
    console.log(`Brand : ${brand}, Mouse : ${mouse}`)
  }
}

class MakeNewComputer {
  constructor(brand, mouse, screen, operatingSystem) {
    this.brand = brand
    this.mouse = mouse
    this.screen = screen
    this.operatingSystem = operatingSystem
  }
  openSesame() {
    console.log("Hello World!")
  }
  shutdown() {
    console.log(`Bye ${operatingSystem}`)
  }
  spec() {
    console.log(`Brand : ${brand}, Mouse : ${mouse}`)
  }
}
