//Create an array of movies with at least three movies.
let arr = ["toy story", "jurrasic park", "ace ventura"]

//Using the array from above, store the first movie in a variable
let firstMovie = arr[0]

//Get the length of the original array and store it in a new variable
let arrLength = arr.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
// let lastMovie = arr.indexOf(-1)
let lastMovie = arr[arrLength - 1]
