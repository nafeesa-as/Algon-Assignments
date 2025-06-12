/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this._validateNumber(num);
    this.result += num;
  }

  subtract(num) {
    this._validateNumber(num);
    this.result -= num;
  }

  multiply(num) {
    this._validateNumber(num);
    this.result *= num;
  }

  divide(num) {
    this._validateNumber(num);
    if (num === 0) throw new Error('Cannot divide by zero');
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      const sanitizedExpression = expression.replace(/\s+/g, '');

      if (!/^[\d+\-*/().]+$/.test(sanitizedExpression)) {
        throw new Error('Invalid characters in expression');
      }

      const evaluatedResult = new Function(`return ${sanitizedExpression}`)();
      if (
        typeof evaluatedResult !== 'number' ||
        isNaN(evaluatedResult) ||
        !isFinite(evaluatedResult)
      ) {
        throw new Error('Invalid expression');
      }

      this.result = evaluatedResult;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }

  _validateNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Input must be a valid number');
    }
  }
}

module.exports = Calculator;
