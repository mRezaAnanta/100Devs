function past(h, m, s) {
  let result = 0;
  0 <= h <= 23 ? result += h * 3600000 : result += 0
  0 <= m <= 59 ? result += m * 60000 : result += 0
  0 <= s <= 59 ? result += s * 1000 : result += 0
  return result;
}

console.log(past(1, 1, 1))
