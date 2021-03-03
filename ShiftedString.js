/**
 *
 * Given two strings, return true if A can be shifted to the right to get B
 *
 * @param {String} a
 * @param {String} b
 *
 * @returns {Boolean}
 */
const isShifted = (a, b) => {
  if (a === '' && b === '') {
    return true;
  }
  if (a && b && a.length && b.length && a.length === b.length) {
    let possibleShift = false;
    let i = 0;
    let testString = b;
    while (possibleShift === false && i < a.length) {
      if (testString === a) {
        possibleShift = true;
      } else {
        testString = testString.substr(1) + testString[0];
        i += 1;
      }
    }
    return possibleShift;
  }
  return false;
};

// eslint-disable-next-line
console.log(isShifted('abcde', 'cdeab'));

// eslint-disable-next-line
console.log(isShifted('', ''));

// eslint-disable-next-line
console.log(isShifted('abcde', 'abcde'));