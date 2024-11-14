//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
const arr = (arr) => {
  // return alert(arr.reduce((tot, cur) => tot * cur))
  let tot = 1
  arr.forEach(num => tot *= num)
  return alert(tot)
}

arr([1, 2, 3])
