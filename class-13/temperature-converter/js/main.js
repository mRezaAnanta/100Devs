const answerOne = document.querySelector('.answerOne');
const answerTwo = document.querySelector('.answerTwo');
const convert = document.querySelector('.convert');
const celsiusChar = "\u2103";
const fahrenheitChar = "\u2109";

let celToFah = (celsius) => {
  return (celsius * 1.8) + 32;
}

let fahToCel = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
}

let celToKelv = (celsius) => {
  return (Number(celsius) + 273.15).toFixed(2);
}

let kelvToCel = (kelv) => {
  return (Number(kelv) - 273.15).toFixed(2);
}

let fahToKelv = (fahrenheit) => {
  return (((fahrenheit - 32) / 1.8) + 273.15).toFixed(2);
}

let kelvToFah = (kelv) => {
  return (((Number(kelv) - 273.15) * 1.8) + 32).toFixed(2);
}

let answer = () => {
  let input = document.querySelector('input').value;
  let tempOne = document.querySelector('.selectTempOne').value;
  let tempTwo = document.querySelector('.selectTempTwo').value;

  if (tempOne == "celsius" && tempTwo == "fahrenheit") {
    answerOne.innerText = input + celsiusChar;
    answerTwo.innerText = celToFah(input) + fahrenheitChar;
    console.log(celToFah(input));
    return;
  }
  if (tempOne == "fahrenheit" && tempTwo == "celsius") {
    answerOne.innerText = input + fahrenheitChar;
    answerTwo.innerText = fahToCel(input) + celsiusChar;
    console.log(fahToCel(input));
    return;
  }
  if (tempOne == "celsius" && tempTwo == "kelvin") {
    answerOne.innerText = input + celsiusChar;
    answerTwo.innerText = celToKelv(input) + "K";
    console.log(celToKelv(input));
    return;
  }
  if (tempOne == "kelvin" && tempTwo == "celsius") {
    answerOne.innerText = input + "K";
    answerTwo.innerText = kelvToCel(input) + celsiusChar;
    console.log(kelvToCel(input));
    return;
  }
  if (tempOne == "fahrenheit" && tempTwo == "kelvin") {
    answerOne.innerText = input + fahrenheitChar;
    answerTwo.innerText = fahToKelv(input) + "K";
    console.log(fahToKelv(input));
    return;
  }
  if (tempOne == "kelvin" && tempTwo == "fahrenheit") {
    answerOne.innerText = input + "K";
    answerTwo.innerText = kelvToFah(input) + fahrenheitChar;
    console.log(kelvToFah(input));
    return;
  }
}

convert.addEventListener("click", answer);
