function titleCase(sentence){
  const capWords = []
  let sentenceArray = sentence.split(" ")
  for(let char of sentenceArray){
    capWords.push(char[0].toUpperCase() + char.slice(1).toLowerCase())
  }
  return capWords.join(" ")
}

console.log(titleCase("sHoRt AnD sToUt"));

