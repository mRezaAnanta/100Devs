//Create a mouse object that has four properties and three methods
let mouse = {
  feet: 4,
  color: "white",
  favFood: "Cheese",
  enemy: "Cat",
}
mouse.scream = function () {
  console.log("STARTTTTTTTTTTTTTOOO!")
}
mouse.screech = function () {
  console.log("STOOOOPE!")
}
mouse.furColor = function () {
  console.log(mouse.color)
}
