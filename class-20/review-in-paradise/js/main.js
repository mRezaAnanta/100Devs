// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = ""
favFood = "Kebab"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let brah = ""
brah = "dandadan"
alert(brah[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const threeNum = (a, b, c) => {
  return (a / b) * c
}
console.log(threeNum(4, 6, 2))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const oneNum = (num) => {
  return Math.sqrt(num)
}
console.log(oneNum(9))

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const oneMonth = (month) => {
  return month.toLowerCase() == "may" | "june" | "july" ? "YAY" : "Booo"
}
console.log(oneMonth("june"))

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const num = (a) => {
  for (let i = 1; i <= a; i++) {
    i % 5 == 0 ? i++ : console.log(i)
  }
}
console.log(num(10))
