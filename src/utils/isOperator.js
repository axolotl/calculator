// simple function that returns whether a character is an operator

const isOperator = char => {
  switch (char) {
    case '%':
    case '÷':
    case 'x':
    case '-':
    case '+':
      return true
    default:
      return false
  }
};

export default isOperator;
