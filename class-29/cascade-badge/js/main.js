//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemonList = ["charmander", "squirtle", "bulbasaur"]
let reversePokemon = (arr) => {
  console.log(arr.reverse())
}
reversePokemon(pokemonList)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let sumSquares = (a, b) => {
  console.log(a.reduce((prev, cur) => prev + (cur ** 2), 0))
  console.log(b.reduce((prev, cur) => prev + (cur ** 3), 0))
  return a.reduce((prev, cur) => prev + (cur ** 2), 0) > b.reduce((prev, cur) => prev + (cur ** 3), 0)
}
console.log(sumSquares([4, 4, 3], [1, 2, 3]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
const isMult = (arr) => {
  return arr.filter((x, i) => x % i === 0)
}
console.log(isMult([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
let sum = (arr) => {
  return arr.reduce((prev, current) => prev + Number(current), 0)
}
console.log(sum([22, -6, 32, 82, 9, 25]))
