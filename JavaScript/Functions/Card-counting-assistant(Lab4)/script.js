let count = 0;
const cc = (card) => {
  //check card and update count
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
    case 7:
    case 8:
    case 9:
      break;
    
  }
  //return Bet or Hold based on count
  if(count > 0){
    return `${count} Bet`
  }else{
    return `${count} Hold`
  }
} 