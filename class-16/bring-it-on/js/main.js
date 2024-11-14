// *Variables*
// Create a variable and console log the value
let newVar = 10
console.log(newVar)

// Create a variable, add 10 to it, and alert the value
let secondVar = 1
secondVar += 10
alert(secondVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(a, b, c, d) {
  return alert(a - b - c - d)
}

subFour(7, 5, 3, 8)

// Create a function that divides one number by another and returns the remainder
function divNumbers(a, b) {
  return console.log((a / b) % 2)
}

divNumbers(10, 2)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function condition(a, b) {
  if (a + b >= 50) {
    return alert("JUMANJI!")
  }
}

condition(50, 10)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThreeNum(a, b, c) {
  let result = a * b * c
  if (result % 3 == 0) {
    return alert("ZEBRA!")
  }
}

multThreeNum(6, 5, 2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopDeLoopPoopScoobyDoop(word, num) {
  for (let i = 0; i < num; i++) {
    console.log(word)
  }
}

loopDeLoopPoopScoobyDoop(" Woop", 4)
