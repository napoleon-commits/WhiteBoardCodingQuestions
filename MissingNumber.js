/**
 *
 * Given an array of integers of size n, where all elements are between 1 and n inclusive,
 * find all of the elements of [1, n] that do not appear in the array.
 * Some numbers may appear more than once.
 *
 * @param {Array} nums
 * @returns {Array}
 */
const findDisappearedNumbers = (nums) => {
  const output = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums.indexOf(i + 1) === -1) {
      output.push(i + 1);
    }
  }
  return output;
};

const nums = [4, 6, 2, 6, 7, 2, 1];
// eslint-disable-next-line
console.log(findDisappearedNumbers(nums));
