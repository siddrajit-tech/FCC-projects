const chunkArrayInGroups = (array, num) =>{
  const newArray = []
  for(let i = 0; i < array.length; i += num){
    let chunk = array.slice(i, i + num)
    newArray.push(chunk)
  }
  
  return newArray
}
