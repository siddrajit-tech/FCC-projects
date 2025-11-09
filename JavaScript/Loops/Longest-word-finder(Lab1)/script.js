const findLongestWordLength = (sentence) => {
  sentence = sentence.trim().split(/\s+/)
  const lengths = []
  for(let word of sentence){
    lengths.push(word.length)
  }
  return Math.max(...lengths)
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))