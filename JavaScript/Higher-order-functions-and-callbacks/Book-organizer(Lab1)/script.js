const books = [
  {
    title: "The Pragmatic Programmer",
    authorName: "Dave Thomas",
    releaseYear: 1999
  },
  {
    title: "Clean Code",
    authorName: "Robert Cecil Martin",
    releaseYear: 2008
  },
  {
    title: "Code Complete",
    authorName: "Steve McConnell",
    releaseYear: 1993
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    authorName: "Errich Gamma",
    releaseYear: 1994
  }
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear){
    return -1
  }else if (book1.releaseYear > book2.releaseYear){
    return 1
  }else{
    return 0
  }
}

const filteredBooks = books.filter(book => book.releaseYear >= 1995)

filteredBooks.sort(sortByYear)

console.log(filteredBooks)
