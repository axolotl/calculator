// objective here is to build on the eval function to make it better
// first thing has to translate x to * and ÷ to /

const calcSolution = (input) => {
  const translation = input.replace('x', '*').replace('÷', '/');
  return eval(translation);
}

export default calcSolution;