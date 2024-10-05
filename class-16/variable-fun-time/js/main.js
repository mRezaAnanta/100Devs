//--- Easy
//create a variable and assign it a number
let num = 1

//minus 10 from that number
num = num - 10

//print that number to the console
console.log("num: " + num)

//--- Medium
//create a variable that holds a value from the input
let input = document.querySelector('input#danceDanceRevolution').value;
//add 25 to that number
input = parseInt(input) + 25

//alert that number
alert(input)

//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1');
console.log("input: " + input)

//add an event listener to that element that console logs the sum of the two previous variables
// h1.addEventListener("click", console.log("sum: " + (num + input)));
h1.addEventListener("click", sum);

function sum() {
  console.log("sum: " + (num + input))
}
