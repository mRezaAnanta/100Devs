let deckID = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckID = data.deck_id
    document.querySelector('h3').innerText = deckID
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo() {
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img.card-1').src = data.cards[0].image
      document.querySelector('img.card-2').src = data.cards[1].image
      document.querySelector('h2').innerText = whoWin(data.cards[0].value, data.cards[1].value)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function whoWin(player1, player2) {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
  let p1 = arr.indexOf(player1)
  let p2 = arr.indexOf(player2)
  // switch (player1) {
  //   case 'JACK':
  //     player1 = 11
  //     break
  //   case 'QUEEN':
  //     player1 = 12
  //     break
  //   case 'KING':
  //     player1 = 13
  //     break
  //   case 'ACE':
  //     player1 = 14
  //     break
  // }
  // switch (player2) {
  //   case 'JACK':
  //     player2 = 11
  //     break
  //   case 'QUEEN':
  //     player2 = 12
  //     break
  //   case 'KING':
  //     player2 = 13
  //     break
  //   case 'ACE':
  //     player2 = 14
  //     break
  // }
  // let p1 = typeof player1 === 'string' ? parseInt(player1) : player1
  // let p2 = typeof player2 === 'string' ? parseInt(player2) : player2
  //
  console.log(p1, typeof p1, p2, typeof p2)
  return p1 > p2 ? "PLAYER 1 WON" : "PLAYER 2 WON"
}
