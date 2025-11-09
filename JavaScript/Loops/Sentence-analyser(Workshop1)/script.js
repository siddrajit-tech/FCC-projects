const getVowelCount = (sentence) => {
  const vowels = "aeiouAEIOU"
  let count = 0
  for(const char of sentence){
    if(vowels.includes(char)){
      count +=1
    }else{
      continue
    }
  }
  return count
}

const vowelCount = getVowelCount("Apples are tasty fruits")
console.log(`Vowel Count: ${vowelCount}`)

const getConsonantCount = (sentence) => {
  const vowels = "aeiouAEIOU"
  let count = 0
  const newSentence = sentence.replaceAll(/[^a-zA-Z]/g, "")
  for(const char of newSentence){
    if(!vowels.includes(char)){
      count +=1
    }
  }
  return count
}

const consonantCount = getConsonantCount("Coding is fun")
console.log(`Consonant Count: ${consonantCount}`)


const getPunctuationCount = (sentence) => {
  let cleanSentence = sentence.replaceAll(/[a-zA-Z]/g, "")
  cleanSentence = cleanSentence.replace(/\s/g, "")

  return cleanSentence.length
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?")

console.log(`Punctuation Count: ${punctuationCount}`)

const getWordCount = (sentence) => {
  sentence = sentence.trim()
  if(sentence !== "" && sentence !== " "){
    const array = sentence.split(" ")
    return array.length
  }else{
    return 0
  }
}

const wordCount = getWordCount("I love freeCodeCamp")

console.log(`Word Count: ${wordCount}`)