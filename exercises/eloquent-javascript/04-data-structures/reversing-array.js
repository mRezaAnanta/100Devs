const reverseArray = (arr) => {
  let array = []
  let num = arr.length
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[num - 1]);
    num--
  }
  return array
}

const reverseArrayInPlace = (arr) => {
  return arrayValue = reverseArray(arr)
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
