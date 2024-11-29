//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNum = [1, 6, 3, 71, 2]
alert(arrNum.reduce((total, cur) => total + cur))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const arrayOfNum = (arr) => arr.map(x => Math.sqrt(x))
arrayOfNum([9, 27])

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (string) => console.log([...string].reverse().join(''))
reverseString("strings")

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
