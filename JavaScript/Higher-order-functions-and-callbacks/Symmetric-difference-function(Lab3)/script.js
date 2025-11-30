function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2]
  return newArr.filter(item => {
    return !(arr1.includes(item) && arr2.includes(item))
  });
}
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));



