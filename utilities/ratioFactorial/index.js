let ratioOfTwoNumbers = require("../ratio/index");
let factorialOfNumber = require("../factorial/index");
function ratioAndFactorial(num, num1, num2) {
  const ratio = ratioOfTwoNumbers(num, num1);
  const factorial = factorialOfNumber(num2);
  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
