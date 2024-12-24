document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('title')

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  console.log(url)

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log(data.title)

      if (!localStorage.getItem('title')) {
        localStorage.setItem('title', data.title)
      } else {
        let books = localStorage.getItem('title') + " ; " + data.title
        localStorage.setItem('title', books)
      }
      document.querySelector('h2').innerText = localStorage.getItem('title')
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
