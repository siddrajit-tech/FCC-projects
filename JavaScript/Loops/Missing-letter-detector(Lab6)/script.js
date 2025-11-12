const fearNotLetter = (alphabets) => {
  for(let i = 0; i < alphabets.length - 1; i++){
    if(alphabets[i + 1].charCodeAt(0) - alphabets[i].charCodeAt(0) !== 1){
      return String.fromCharCode(alphabets[i].charCodeAt(0) + 1)
    }
  }
  return undefined
}
  


console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
