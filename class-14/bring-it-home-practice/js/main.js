// *Variables*
// Create a variable and console log the value
let what = 7;
console.log("what: " + what)

// Create a variable, add 10 to it, and alert the value
let nope = 110;
nope = + 10
console.log("nope: " + nope)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let subFour = (a, b, c, d) => {
  const sub = a + b + c + d;
  console.log("subFour: " + sub);
}

// Create a function that divides one number by another and returns the remainder
let modTwo = (a, b) => {
  const mod = a % b
  console.log("modTwo: " + mod)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let jumanji = (a, b) => {
  const jum = a + b
  if (jum >= 50) {
    alert("Jumanji!")
  }
  console.log("jumanji: " + jum)
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let zebra = (a, b, c) => {
  const z = a * b * c;
  if (z % 3 == 0) {
    alert("Zebra!")
  }
  console.log("zebra: " + z)
}

subFour(1, 2, 3, 4);
modTwo(4, 2);
jumanji(10, 50);
zebra(1, 2, 3);
