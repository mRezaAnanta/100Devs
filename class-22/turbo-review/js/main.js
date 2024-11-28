// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "Water"
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let string = "Mountain Dew Apple"
console.log(string.toLowerCase().includes("apple"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rand = () => {
  let random = Math.random()
  return random < 0.4 ? "rock" : random < 0.7 ? "paper" : "scissors"
}
console.log(rand())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const againstBot = (yourChoice) => {
  let r = rand()
  return r == "rock" && yourChoice == "paper" ? "Bot chooses rock. You win!" :
    r == "rock" && yourChoice == "scissors" ? "Bot chooses rock. The bot win!" :
      r == "paper" && yourChoice == "scissors" ? "Bot chooses paper. You win!" :
        r == "paper" && yourChoice == "rock" ? "Bot chooses paper. The bot win!" :
          r == "scissors" && yourChoice == "rock" ? "Bot chooses scissors. You win!" :
            r == "scissors" && yourChoice == "paper" ? "Bot chooses scissors. The bot win!" :
              `You both chosses ${r}. Draw!`
}
console.log(againstBot("paper"))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const choicesArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(againstBot(arr[i]))
  }
}
choicesArray(["paper", "rock", "scissors"])
