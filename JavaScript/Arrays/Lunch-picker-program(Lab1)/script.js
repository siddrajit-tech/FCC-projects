let lunches = [];

const addLunchToEnd = (lunchMenu, lunchItem) => {
  lunchMenu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunchMenu
}

const addLunchToStart = (lunchMenu, lunchItem) => {
  lunchMenu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunchMenu
}

const removeLastLunch = (lunchMenu) => {
  if(lunchMenu.length !== 0){
    let removedItem = lunchMenu.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.")
  }
  return lunchMenu
}

const removeFirstLunch = (lunchMenu) => {
  if(lunchMenu.length !== 0){
    let removedItem = lunchMenu.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }else{
    console.log("No lunches to remove.")
  }
  return lunchMenu
}

const getRandomLunch = (lunchMenu) => {
  if(lunchMenu.length !== 0){
    const randomLunch = lunchMenu[Math.floor(Math.random() * lunchMenu.length)]
    console.log(`Randomly selected lunch: ${randomLunch}`)
  }else{
    console.log("No lunches available.")
  }
  
}

const showLunchMenu  = (lunchMenu) => {
  if(lunchMenu.length !== 0){
    const lunches = lunchMenu.join(", ")
    console.log(`Menu items: ${lunches}`)
  }else{
    console.log("The menu is empty.")
  }
}