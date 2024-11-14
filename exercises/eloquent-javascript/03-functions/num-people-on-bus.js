let num = function (busStops) {
  let result = 0;
  for (let i = 0; i < busStops.length; i++) {
    result += busStops[i][0]
    result -= busStops[i][1]
  }
  return result;
}

console.log(num([[10, 0], [3, 5], [5, 8]]))
