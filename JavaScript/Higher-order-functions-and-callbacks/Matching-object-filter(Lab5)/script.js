function whatIsInAName(names, name) {
  return names.filter(element => {
    return Object.keys(name).every(key => element[key] === name[key])
  });
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
