const findElement = (array, func) => {
  for(let num of array){
    if(func(num) === true){
      return num
    }
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
