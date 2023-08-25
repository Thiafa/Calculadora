function calculateExpression(expression) {
  const tokens = expression.match(/(\d+(\.\d+)?)|([+\-*/^%()])/g);
  if (!tokens) {
    throw new Error('Invalid expression');
  }

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
    '%': 3,
  };

  const outputQueue = [];
  const operatorStack = [];

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      outputQueue.push(parseFloat(token));
    } else if ('+-*/^%'.includes(token)) {
      while (
        operatorStack.length > 0 &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== '('
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop(); // Pop the '('
    }
  });

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }

  const evalStack = [];

  outputQueue.forEach((token) => {
    if (!isNaN(token)) {
      evalStack.push(token);
    } else {
      const b = evalStack.pop();
      const a = evalStack.pop();
      switch (token) {
        case '+':
          evalStack.push(a + b);
          break;
        case '-':
          evalStack.push(a - b);
          break;
        case '*':
          evalStack.push(a * b);
          break;
        case '/':
          if (b == 0) {
            alert('Erro! Division by zero');
            throw new Error('Erro! Division by zero');
          }
          evalStack.push(a / b);
          break;
        case '%':
          evalStack.push(`${a % b}`);
          break;
        case '^':
          evalStack.push(Math.pow(a, b));
          break;
      }
    }
  });

  if (evalStack.length !== 1) {
    throw new Error('Invalid expression');
  }
  console.log(evalStack[0]);
  return evalStack[0];
}

module.exports = { calculateExpression };
