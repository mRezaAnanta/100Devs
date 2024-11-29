//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 9]
alert(arr.reduce((prev, cur) => prev + cur))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const isSquared = (arr) => {
  return arr.map((x) => x ** 2)
}

//Create a function that takes string
//Print the reverse of that string to the console
let str = "string!"
const reverseString = (string) => console.log([...string].reverse().join(''))
reverseString(str)

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindrome = (string) => {
  // let arr = string.split('')
  // let a = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (!a.includes(arr[i])) a.push(arr[i])
  // }
  // return (a.length == arr.length)
  return string === string.split('').reverse().join('')
}
alert(palindrome("abcdefghij"))
alert(palindrome("abccba"))
