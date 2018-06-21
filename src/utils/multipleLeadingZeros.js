// this function looks returns true if multiple leading zeros are used
// it returns false if the appear behind a '.'

const multipleLeadingZeros = string => {
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === '.') {
      return false;
    } else if (isNaN(parseInt(string[i], 10))) {
      return true;
    }
  }
  return true;
};

export default multipleLeadingZeros;
