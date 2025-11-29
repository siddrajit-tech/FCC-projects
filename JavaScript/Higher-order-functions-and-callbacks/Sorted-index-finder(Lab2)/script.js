function getIndexToIns(arr, num) {
  const sorted = [...arr].sort((a, b) => a - b )
  const index = sorted.findIndex(value => num <= value)

  if (index === -1) {
    return sorted.length
  }

  return index
}



console.log(getIndexToIns([3, 10, 5], 11));
