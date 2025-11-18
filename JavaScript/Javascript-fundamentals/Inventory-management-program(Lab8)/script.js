const inventory = []

function findProductIndex(name){
  let productName = name.toLowerCase()
  for (let i = 0; i < inventory.length; i++){
    if (inventory[i].name === productName){
      return i
    }
  }
  return -1
}

function addProduct(product1){

  let product = product1.name.toLowerCase()
  product1.name = product
  let index = findProductIndex(product)

  if (index !== -1){
    inventory[index].quantity += product1.quantity
    console.log(`${product} quantity updated`);
    
  }else{
    inventory.push(product1)
    console.log(`${product} added to inventory`)
  }

}

function removeProduct(productName, amount){

  let product = productName.toLowerCase()
  let index = findProductIndex(product)

  if (index === -1){
    console.log(`${product} not found`);
  }else{
    let newQuantity = inventory[index].quantity - amount
    if (newQuantity === 0){
      inventory.splice(index, 1)  
    }else if (newQuantity < 0){
      console.log(`Not enough ${product} available, remaining pieces: ${inventory[index].quantity}`);
    }else{
      inventory[index].quantity = newQuantity
      console.log(`Remaining ${product} pieces: ${newQuantity}`);
      
    }
  }
}









