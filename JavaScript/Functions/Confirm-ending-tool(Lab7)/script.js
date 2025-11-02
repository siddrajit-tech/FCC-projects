const confirmEnding = (stringToCheck, stringToCheckAgainst) => {
  const endingString = stringToCheck.substring(stringToCheck.length - stringToCheckAgainst.length)
  return endingString === stringToCheckAgainst
}