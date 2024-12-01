//Create a button that adds 1 to a botScore stored in localStorage 
if (!localStorage.getItem('botScore')) {
  localStorage.setItem('botScore', 0)
}
document.querySelector('button').addEventListener('click', addOne)

function addOne() {
  // document.querySelector('h2').value += 1
  let num = Number(localStorage.getItem('botScore'))
  num += 1
  localStorage.setItem('botScore', num)
}
