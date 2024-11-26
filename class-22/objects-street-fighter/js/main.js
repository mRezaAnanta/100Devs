//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(punch, kick, catchPhrase, specialMove) {
  this.punch = punch
  this.kick = kick
  this.catchPhrase = catchPhrase
  this.specialMove = specialMove
  this.taunt = function () {
    console.log(`You can't handle my ${this.catchPhrase}`)
  }
  this.winning = function () {
    console.log(`HAHA! ${this.catchPhrase}`)
  }
  this.dash = function () {
    console.log(`Whooop, missed me!`)
  }
}

let ryu = new MakeFighter('high', 'high', 'get over here!', 'Hadouken')
