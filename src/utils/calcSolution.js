// objective here is to build on the eval function to make it better
// first thing has to translate x to * and ÷ to /
import math from 'mathjs';

const calcSolution = (input) => {
  const translation = input.replace('x', '*').replace('÷', '/');
  return math.eval(translation);
}

export default calcSolution;