//Create an array of movie titles. Loop through the array and each element to the h2.
let arr = ["toy story", "jurrasic park", "ace ventura"]
arr.forEach(mov => {
  document.querySelector('h2').innerText += mov
});

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArr = [5, 10, 15, 20]

let newNum = numArr.forEach((num, i) => {
  newNum[i] = num + 3
});

console.log(newNum)

//Find the average of all the numbers from question two
let result = 0
numArr.forEach((i) => {
  result += numArr[i]
});

console.log(result / numArr.length)
