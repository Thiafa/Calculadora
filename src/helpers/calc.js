const customEvaluate = (expression) => {
  // return expression;

  const tokens = expression.split('');

  // Função auxiliar para verificar se um caractere é um operador
  function isOperator(char) {
    return ['+', '-', '*', '/', '%', '^'].includes(char);
  }

  // Pilha para armazenar números e operadores
  const stack = [];

  // if (!isNaN(token) || token === '.') {
  //   // Se o token for um número ou um ponto decimal, adiciona ao topo da pilha
  //   if (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
  //     // Se o topo da pilha também for um número, concatena os dígitos
  //     stack[stack.length - 1] += token;
  //   } else {
  //     stack.push(token);
  //   }
  // } else
  // Loop através dos tokens
  let operador = 0;
  for (let token of tokens) {
    // console.log(token);
    if (!isNaN(token) || token === '.') {
      stack.push(token);
    } else if (isOperator(token)) {
      operador = token;
    }

    if (stack.length == 2) {
      let result = 0;

      num2 = Number(stack.pop());
      num1 = Number(stack.pop());
      switch (operador) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
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
    }

    // O resultado final estará no topo da pilha
  }
  console.log(stack);
  return parseFloat(stack[0]);
};
module.exports = { customEvaluate };
