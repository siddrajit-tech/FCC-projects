function bouncer(array){

  const newArray = []

  for(let word of array){
    if(word){
      newArray.push(word)
    } 
  }
return newArray
}
console.log(bouncer([7, "ate", "", false, 9]));


