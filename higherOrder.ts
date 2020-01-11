// Higher order functions returning another function
// Must use somehow, get it in play
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
​
  return doSomething
}
console.log(higherOrder(2)(3)(10))
