//Arrays
let arr = []

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["Game of Thrones", "Black Mirror", "Lost"]
shows.map(x => console.log(x))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 5, 7, 10, 80]
let newNum = nums.filter(x => x % 2 == 0)
console.log(newNum)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const arrNum = (arr) => {
  arr.sort((a, b) => a - b)
  // return (arr[1], arr[arr.length - 2])
  alert(`${arr[arr.length - 2]}, ${arr[1]}`)
}
// alert(arrNum([1, 5, 7, 10, 80]))
arrNum([1, 5, 7, 10, 80])
