/**
 *
 * You are given an array of integers.
 * Return the largest product that can be made by
 * multiplying any three integers in the array.
 *
 * @param {Array} lst
 * @returns {Number}
 */
const maximumProductOfThree = (lst) => {
  let maximum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < lst.length; i += 1) {
    for (let j = 0; j < lst.length; j += 1) {
      for (let k = 0; k < lst.length; k += 1) {
        if (
          i !== j
            && i !== k
            && j !== k
            && (lst[i] * lst[j] * lst[j] > maximum)
        ) {
          maximum = lst[i] * lst[j] * lst[j];
        }
      }
    }
  }
  return maximum;
};

// eslint-disable-next-line
console.log(
  maximumProductOfThree([-4, -4, 2, 8]),
);
