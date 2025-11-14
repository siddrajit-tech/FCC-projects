const pyramid = (char, rows, bool) => {
  let pyramidStr = '\n'; // start with a newline

  if (bool === false) { // vertex up
    for (let row = 1; row <= rows; row++) {
      const spaces = ' '.repeat(rows - row);
      const chars = char.repeat(2 * row - 1);
      pyramidStr += spaces + chars + '\n';
    }
  } else { // vertex down
    for (let row = rows; row >= 1; row--) {
      const spaces = ' '.repeat(rows - row);
      const chars = char.repeat(2 * row - 1);
      pyramidStr += spaces + chars + '\n';
    }
  }

  return pyramidStr;
};
