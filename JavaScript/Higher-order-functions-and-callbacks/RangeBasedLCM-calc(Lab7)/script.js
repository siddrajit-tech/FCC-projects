function smallestCommons(array) {
  const [a, b] = array
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let multiple = min; 

  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}


function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

console.log(smallestCommons([5, 1]));
