function digPow(n, p) {
  const arr = n.toString().split('')
  let sum = 0
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** p
    p++
  }
  // for (let i = 1; n < sum; i++) {
  //   if (n * i == sum) {
  //     k = i
  //     break
  //   }
  //   console.log(k)
  // }
  console.log(sum)
  let z = 1
  while (n < sum) {
    console.log("while")
    if (n * z == sum) console.log(z)
    z++
  }
  // console.log(k)
  // return k
  // return -1
}

digPow(89, 1) //n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
