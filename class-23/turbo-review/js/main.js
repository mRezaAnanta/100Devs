// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let question = "Is this a question?"
alert(question.endsWith("?"))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let introduction = "Hi. My name is mRezaAnanta and i'm a jr. dev"
console.log(introduction.replaceAll("jr. dev", "software engineer"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rand = () => {
  let random = Math.random()
  return random < 0.33 ? "rock" : random < 0.66 ? "paper" : "scissors"
}
console.log(rand())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const againstBot = (yourChoice) => {
  let r = rand()
  return r == "rock" && yourChoice == "paper" || r == "paper" && yourChoice == "scissors" || r == "scissors" && yourChoice == "rock" ? `Bot chooses ${r}. You win!` :
    r == "rock" && yourChoice == "scissors" || r == "paper" && yourChoice == "rock" || r == "scissors" && yourChoice == "paper" ? `Bot chooses ${r}. The bot win!` :
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
