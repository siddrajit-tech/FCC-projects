const addTogether = (...args) => {
  const isNumber = n => typeof n === "number";

  if (args.length === 2) {
    if (!isNumber(args[0]) || !isNumber(args[1])) return undefined;
    return args[0] + args[1];
  } else if (args.length === 1) {
    if (!isNumber(args[0])) return undefined;
    return function(num) {
      if (!isNumber(num)) return undefined;
      return args[0] + num;
    };
  } else {
    return undefined;
  }
};