/**
 *
 * Given a sorted array, A, with possibly duplicated elements,
 * find the indices of the first and last occurrences of a target element, x.
 * Return -1 if the target is not found.
 *
 * @param {Array} arr
 * @param {Number} target
 */
const getRange = (arr, target) => {
  const indices = [-1, -1];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === target) {
      if (indices[0] === -1) {
        indices[0] = i;
        indices[1] = i;
      } else {
        indices[1] = i;
      }
    }
  }
  return indices;
};

// eslint-disable-next-line
console.log(getRange([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9));
// eslint-disable-next-line
console.log(getRange([100, 150, 150, 153], 150));
// eslint-disable-next-line
console.log(getRange([1, 2, 3, 4, 5, 6, 10], 9));
// eslint-disable-next-line
console.log(getRange([1, 2, 2, 2, 2, 3, 4, 7, 8, 8], 2));
