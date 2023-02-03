//takes the sum of two numbers
const add = function(firstNum, secondNum) {
  let sumTotal = 0;
  if (firstNum.length == 0) {
      return 0;
  } 
      else if (firstNum.length >0){
          firstNum.forEach(item =>{
              sumTotal += item;
          })
          return sumTotal;
      }  
      else {sumTotal =+ firstNum + secondNum;
          return sumTotal;
      }
}
//same as add
const sum = function(firstNum, secondNum) {
  let sumTotal = 0;
  if (firstNum.length == 0) {
      return 0;
  } 
      else if (firstNum.length >0){
          firstNum.forEach(item =>{
              sumTotal += item;
          })
          return sumTotal;
      }  
      else {sumTotal =+ firstNum + secondNum;
          return sumTotal;
      }
}
//subracts seconds number from first number
const subtract = function (firstNum,secondNum) {
  let subtractTotal = firstNum - secondNum;
  return subtractTotal;
}
//multiplies first number by second number, or multiple numbers as an array
const multiply = function(firstNum, secondNum){
  let sumTotal = 1;
  if ((firstNum.length >0)){
      firstNum.forEach(item => {
          sumTotal *= item;
      })
      return sumTotal;
  }
  else {
      sumTotal *= firstNum *secondNum;
      return sumTotal;
  }  
}
//takes the first argument in the function and raises it to the second argument power
const power = function (number, power){
  let total = (number **= power);
  return total;
}

//finds the factorial of a number
const factorial = function (number){
  let total = 1
  for(let i = 1; i <= number; i++){
      total *= i;
  }
  return total;
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
