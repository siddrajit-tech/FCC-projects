function steamrollArray(nestedArray) {
  let flattened = [];
  for (let i = 0; i < nestedArray.length; i++) {
    const element = nestedArray[i];
    if (Array.isArray(element)) {
      flattened = flattened.concat(steamrollArray(element)); // Recursively flatten sub-arrays
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}