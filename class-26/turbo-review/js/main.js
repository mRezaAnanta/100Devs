// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveVibe = "You can do it!"
console.log(positiveVibe)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let arr = []
arr = ["H", "e", "l", "l", "o", "!"]
alert(arr.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
const rand = () => {
  let random = Math.random()
  return random < 0.33 ? "rock" :
    random < 0.66 ? "paper" :
      "scissors"
}
console.log(rand())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
const againstBot = (yourChoice) => {
  let bot = rand()
  return bot == "rock" && yourChoice == "paper" || bot == "paper" && yourChoice == "scissors" || bot == "scissors" && yourChoice == "rock" ? `The bot chooses ${bot}. You won!` :
    bot == "rock" && yourChoice == "scissors" || bot == "paper" && yourChoice == "rock" || bot == "scissors" && yourChoice == "paper" ? `The bot chooses ${bot}. Bot won!` :
      `The bot chooses ${bot}. Draw!`
}
console.log(againstBot("paper"))
