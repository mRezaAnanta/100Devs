//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  let input = document.querySelector('input').value
  let h2 = document.querySelector('h2').innerText
  let img = document.querySelector('img').src
  let h3 = document.querySelector('h3').innerText

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      h2 = data.drinks[0].strDrink
      img = data.drinks[0].strDrinkThumb
      h3 = data.drinks[0].strInstructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
