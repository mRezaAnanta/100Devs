function greet(name, owner) {
  return name === owner ? ('Hello boss') : ('Hello guest')
  // if (name == owner) {
  //   return ("Hello boss")
  // } else {
  //   return ("Hello guest")
  // }
}

console.log(greet('Daniel', 'Daniel'))
