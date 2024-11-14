//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
const num = (num) => {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(i + 1)
  }
  return arr
}

console.log(num(3))
