/**
 *
 * Given a non-empty array where each element represents a digit of a non-negative integer,
 * add one to the integer.
 * The most significant digit is at the front of the array
 * and each element in the array contains only one digit.
 * Furthermore, the integer does not have leading zeros,
 * except in the case of the number '0'.
 *
 * @param {Array} digits
 * @returns {Array}
 */
const plusOne = (digits) => {
  const output = String(Number(digits.join('')) + 1).split('');
  for (let i = 0; i < output.length; i += 1) {
    output[i] = Number(output[i]);
  }
  return output;
};

// eslint-disable-next-line
console.log(plusOne([2, 3, 4]));
