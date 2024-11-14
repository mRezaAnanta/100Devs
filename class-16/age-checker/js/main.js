//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function ageChecker(age) {
  // switch (age) {
  //   case age > 30:
  //     console.log("you there is nothing left to look forward too")
  //   case age < 30:
  //     console.log("you can not rent fancy cars affordably")
  //   case age < 25:
  //     console.log("you can not rent cars affordably")
  //   case age < 21:
  //     console.log("you can not drink")
  //   case age < 18:
  //     console.log("you can't hate from outside the club, because you can't even get in")
  //   case age < 16:
  //     console.log("you can't drive")
  //   default:
  //     console.log("wadjasdakfa")
  // }

  if (age > 30) {
    return console.log("you there is nothing left to look forward too")
  }
  if (age < 30) {
    return console.log("you can not rent fancy cars affordably")
  }
  if (age < 25) {
    return console.log("you can not rent cars affordably")
  }
  if (age < 21) {
    return console.log("you can not drink")
  }
  if (age < 18) {
    return console.log("you can't hate from outside the club, because you can't even get in")
  }
  if (age < 16) {
    return console.log("you can't drive")
  }
  else {
    return console.log("kkakaskdaskdasd")
  }
}

// ageChecker(20);

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let input = document.querySelector('input').value;
const h1 = document.querySelector('h1');

h1.addEventListener("click", ageChecker(input));
