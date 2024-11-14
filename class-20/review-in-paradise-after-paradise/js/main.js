// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
const arr = (arr) => {
  return arr[0] < arr[arr.length - 1] ? alert("Hi") : arr[0] > arr[arr.length - 1] ? alert("Bye") : alert("We close in an hour")
}

console.log(arr([1, 2]))
