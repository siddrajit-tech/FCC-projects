const questions = [
  {
    category : "Tech",
    question : "What software company is headquartered in Redmond, Washington?",
    choices : ["Amazon", "Microsoft", "Javascript"],
    answer: "Microsoft"
  },
  {
    category : "English",
    question : "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
    choices : ["Idiom", "Sequence", "Palindrome"],
    answer : "Palindrome"
  },
  {
    category : "Mythology",
    question : "Who was the Ancient Greek God of the Sun?",
    choices : ["Zeus", "Apollo", "Hades"],
    answer: "Apollo"
  },
  {
    category : "Geography",
    question : "In which country would you find Mount Kilimanjaro?",
    choices : ["India", "Nigeria", "Tanzania"],
    answer : "Tanzania"
  },
  {
    category : "Sports",
    question : "Who is Chelsea F.C's best player?",
    choices : ["Moises Caicedo", "Cole Palmer", "Reece James"],
    answer : "Moises Caicedo"
  }
]

const getRandomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * questions.length)
  return questions[randomIndex]
}

const getRandomComputerChoice = (choices) => {
  const randomIndex = Math.floor(Math.random()  * choices.length)
  return choices[randomIndex]
}

const getResults = (question, choice) => {
  if(choice === question.answer) {
    return "The computer's choice is correct!"
  }else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}