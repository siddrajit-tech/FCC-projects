const largestOfAll = (arrays) =>{

  const subArrays = []

  for(const array of arrays){
    subArrays.push(Math.max(...array))
  }
  return subArrays

}

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))




