// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favDay = ""
favDay = "EID FITR"
console.log(favDay)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastChar = ""
lastChar = "apt apt apt apt"
alert(lastChar)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const fiveNum = (a, b, c, d, e) => {
  return 100 - a - b - c - d - e
}
alert(fiveNum(10, 12, 1, 5, 2))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const threeNum = (a, b, c) => {
  return Math.min(a, b, c), Math.max(a, b, c)
}
console.log(threeNum(1, 2, 3))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const coinFlip = () => {
  return Math.random() < 0.6 ? "heads" : "tails"
}
console.log(coinFlip())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
const number = (num) => {
  for (let i = 0; i < num; i++) {
    coinFlip()
  }
}
number(3)
