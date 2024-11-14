//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const arr = (arr) => {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) a.push(arr[i])
  }
  return a
}

console.log(arr([1, 2, 3, 4]))
