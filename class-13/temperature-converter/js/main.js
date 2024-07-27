//Write your pseduo code first! 
const tempOne = document.querySelector('.tempOne');
const tempTwo = document.querySelector('.tempTwo');
const answerOne = document.querySelector('.answerOne');
const answerTwo = document.querySelector('.answerTwo');
const swap = document.querySelector('.swap');
const convert = document.querySelector('.convert');
const celsiusChar = "\u2103";
const fahrenheitChar = "\u2109";

let swapTemp = () => {
  if (tempOne.innerText == "Celsius") {
    tempOne.innerText = "Fahrenheit";
    tempTwo.innerText = "Celsius";
    answerOne.innerText = "32" + fahrenheitChar;
    answerTwo.innerText = "0" + celsiusChar;
    console.log("tempOne is Fahrenheit now!");
    return;
  }
  if (tempOne.innerText == "Fahrenheit") {
    tempTwo.innerText = "Fahrenheit";
    tempOne.innerText = "Celsius";
    answerTwo.innerText = "32" + fahrenheitChar;
    answerOne.innerText = "0" + celsiusChar;
    console.log("tempOne is Celsius now!");
    return;
  }
}

let celToFah = (celsius) => {
  return (celsius * 1.8) + 32;
}

let fahToCel = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
}

let answer = () => {
  let input = document.querySelector('input').value;

  if (tempOne.innerText == "Celsius") {
    answerOne.innerText = input + celsiusChar;
    answerTwo.innerText = celToFah(input) + fahrenheitChar;
    console.log(celToFah(input));
    return;
  }
  if (tempOne.innerText == "Fahrenheit") {
    answerOne.innerText = input + fahrenheitChar;
    answerTwo.innerText = fahToCel(input) + celsiusChar;
    console.log(fahToCel(input));
    return;
  }
}

swap.addEventListener("click", swapTemp);
convert.addEventListener("click", answer);
