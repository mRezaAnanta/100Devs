document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  const place = document.querySelector('#placeToSee')
  const dayLowerCase = day.toLowerCase();

  //Conditionals go here

  if (dayLowerCase == "monday" || dayLowerCase == "wednesday") {
    place.innerText = "Boring";
    console.log("Boring!")
  } else if (dayLowerCase == "saturday" || dayLowerCase == "friday" || dayLowerCase == "sunday") {
    place.innerText = "Weekend";
    console.log("Weekend!")
  } else if (dayLowerCase == "tuesday" || dayLowerCase == "thursday") {
    place.innerText = "Class day!";
    console.log("Class day!")
  } else {
    place.innerText = "Please input the correct day";
    console.log("Please input the correct day")
  }
}
