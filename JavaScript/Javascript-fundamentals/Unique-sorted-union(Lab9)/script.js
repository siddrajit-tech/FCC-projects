const uniteUnique = (...arrays) => {
  const arr = []
  
  for (let array of arrays) {
    for (let element of array){
      if (arr.includes(element)) {
        continue
      } else {
        arr.push(element)
      }
    }
  }
  return arr
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))

