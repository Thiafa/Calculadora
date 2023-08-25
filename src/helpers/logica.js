const customEvaluate = (expression) => {
  function isOperator(char) {
    return ['+', '-', '*', '/', '%', '^'].includes(char);
  }
  const tokens = expression.split('');
  const stack = [];

  condition = true;

  while (condition) {
    for (const token in tokens) {
      if (!isNaN(token) || token === '.') {
        stack.push(token);
      }
      if (!isOperator(token)) {
        stack.push(token);
      } else if (isOperator(token) && stack.length > 1) {
        result = 0;
        num2 = Number(stack.pop());
        num1 = Number(stack.pop());
        switch (token) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case 'x':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          case '%':
            result = num1 % num2;
            break;
          case '^':
            result = Math.pow(num1, num2);
            break;
        }
        stack.push(result);
        console.log(result);
      }
      condition = false;
    }
  }
  return stack[0];
};

module.exports = { customEvaluate };
