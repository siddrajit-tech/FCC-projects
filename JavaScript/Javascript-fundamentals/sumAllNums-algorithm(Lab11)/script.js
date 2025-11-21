const sumAll = (array) => {
  let newArray = array.sort((a, b) => a - b);
  let result = 0
  for (let i = newArray[0]; i <=newArray[1]; i++) {
    result += i
  }
  return result;
}

console.log(sumAll([5, 10]))