// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
document.querySelector('#purple').addEventListener('click', partyPurple)
document.querySelector('#green').addEventListener('click', partyGreen)
document.querySelector('#blue').addEventListener('click', partyBlue)
const body = document.querySelector('body')


function partyPurple() {
  // document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  // document.querySelector('body').style.color = 'white'
  body.style.backgroundColor = 'rgba(241,63,247,1)'
  body.style.color = 'white'
}

function partyGreen() {
  // document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  // document.querySelector('body').style.color = 'white'
  body.style.backgroundColor = 'rgba(0,253,81,1)'
  body.style.color = 'white'
}

function partyBlue() {
  // document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  // document.querySelector('body').style.color = 'white'
  body.style.backgroundColor = 'rgba(0,254,255)'
  body.style.color = 'white'
}
