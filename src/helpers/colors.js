function isOperator(char) {
  if (['+', '-', '*', '/', '%', '^'].includes(char)) {
    return `{
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    }`;
  } else {
    return `{
      fontSize: 20,
      color: '#1A1D24',
      textAlign: 'center',
    }`;
  }
}
module.export = { isOperator };
