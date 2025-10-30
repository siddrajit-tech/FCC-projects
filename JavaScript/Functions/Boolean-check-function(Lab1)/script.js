const booWho = (arg) => {
  if(arg === true || arg === false){
    return true
  }else{
    return false
  }
}

//Test Cases

booWho(true)
booWho(false)
booWho([1, 2, 3])
booWho([].slice)
booWho({ "a": 1 })
booWho(1)