const num = 10

const factorialCalculator = (number) => {
  let result = 1
  let i = 1
  
  // This loop loops through the numbers 1 through the number passed into the variable

  while(i <= number){
    result = result * i
    i++
  }
  return result
}

const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`

console.log(resultMsg);
