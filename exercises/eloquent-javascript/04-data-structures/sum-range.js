const range = (start, end, step = 1) => {
  let arr = []
  if (end < start && step < 0) {
    for (let i = 0; end <= start; step--) {
      arr.push(start)
      start--
    }
    return arr
  } else {
    for (let i = 0; start <= end; step++) {
      arr.push(start)
      start++
    }
    return arr
  }
}

const sum = (arr) => {
  return arr.reduce((total, current) => total += current)
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
