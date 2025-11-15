const getAverage = (scores) => {

  let result = 0

  for(let score of scores){
    result += score
  }
  
  return result / scores.length
}

const getGrade = (score) => {
  if(score === 100){
    return "A+"
  }else if(score >= 90 && score <= 99){
    return "A"
  }else if(score >= 80 && score <= 89){
    return "B"
  }else if(score >= 70 && score <= 79){
    return "C"
  }else if(score >= 60 && score <= 69){
    return "D"
  }else{
    return "F"
  }
  
}

  const hasPassingGrade = (score) => {
  const grade = getGrade(score);
  return grade !== "F";
};
;

const studentMsg = (scores, score) => {
  if(hasPassingGrade(score)){
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`
  }else{
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

