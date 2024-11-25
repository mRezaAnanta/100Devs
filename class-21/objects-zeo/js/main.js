//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  hands: 2,
  color: "white",
  model: "analog",
  brand: "nike",
}
stopwatch.start = function () {
  console.log("STARTTTTTTTTTTTTTOOO!")
}
stopwatch.stop = function () {
  console.log("STOOOOPE!")
}
stopwatch.whichBrand = function () {
  console.log(stopwatch.brand)
}
