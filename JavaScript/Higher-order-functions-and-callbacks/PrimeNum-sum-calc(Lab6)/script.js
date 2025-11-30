function sumPrimes (num) {
  let result = 0
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      result += i
    }
  }
  return result
}

function isPrime(num) {
  if (num < 2) return false; 

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}