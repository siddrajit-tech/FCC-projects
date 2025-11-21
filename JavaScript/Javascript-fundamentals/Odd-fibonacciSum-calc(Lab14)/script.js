function sumFibs(n) {
  const fib = [0, 1];
  let sum = 0
  while (true) {
    const next = fib[fib.length - 1] + fib[fib.length - 2];
    if (next > n) break;   // stop generating
    fib.push(next);
  }

  for (let num of fib) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumFibs(4));