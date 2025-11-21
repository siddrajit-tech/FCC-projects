function pairElement(elements) {
  let emptyArray = [];
  for (let element of elements) {
    if (element === "A") {
      emptyArray.push([element, "T"]);
    }else if (element === "T") {
      emptyArray.push([element, "A"]);
    }else if (element === "C") {
      emptyArray.push([element, "G"]);
    }else if (element === "G") {
      emptyArray.push([element, "C"]);
    }
  }
  return emptyArray;
}

console.log(pairElement("ATCGA"));