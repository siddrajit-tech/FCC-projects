function destroyer(array, ...values) {
  const newArray = array.filter(element => {
    return !values.includes(element)
  })
  return newArray
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
