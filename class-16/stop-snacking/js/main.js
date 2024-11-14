//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function numOfSnacks() {
  let input = Number(document.querySelector('input').value)

  for (let i = 0; i < input; i++) {
    console.log("stop!")
    document.querySelector('#stops').innerText += ' STOP!'
  }
}

// numOfSnacks(10)
document.querySelector('#help').addEventListener('click', numOfSnacks())
