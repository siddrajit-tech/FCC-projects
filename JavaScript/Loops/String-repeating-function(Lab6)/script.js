const repeatStringNumTimes = (string, repeat) => {
  let repeatedString = ""
  for( let i = 0; i < repeat; i++){
    repeatedString += string
  }
    return repeatedString
}

console.log(repeatStringNumTimes("*", 3));
  