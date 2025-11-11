const mutation = (array) => {
  const [first, second] = array
  const firstStr = first.toLowerCase()
  const secondStr = second.toLowerCase()
  for(let char of secondStr){
    if(!firstStr.includes(char)){
      return false
    }
  }
  return true
}

console.log(mutation(["Alien", "line"]))