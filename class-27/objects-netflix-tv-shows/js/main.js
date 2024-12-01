//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow {
  constructor(name, actor, date, country) {
    this.name = name
    this.actor = actor
    this.date = date
    this.country = country
  }
  releaseWhen() {
    let now = new Date()
    console.log(now / 1000)
  }
  showData() {
    console.log(`${this.name}, ${this.actor},${this.date},${this.country},`)
  }
  isReleasedYet() {
    console.log(`Not Yet`)
  }
}
let theTrunk = new NetflixShow('The Trunk', 'Gong Yoo', '29/11/2024', 'South Korea')
