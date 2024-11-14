//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
let numFunc = (num) => {
  // function numFunc(num) {
  let array = []
  for (let i = 0; i < num; i++) {
    array.push(i + 1)
  }
  return array
}

console.log(numFunc(10))
