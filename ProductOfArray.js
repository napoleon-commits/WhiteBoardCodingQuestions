/**
 *
 * You are given an array of integers.
 * Return an array of the same size
 * where the elements at each index is the product of all the elements in the original array
 * except for the element at that index.
 *
 * @param {Array} nums
 *
 * @returns {Array}
 */
const products = (nums) => {
  const output = [];
  for (let i = 0; i < nums.length; i += 1) {
    output.push(
      nums.reduce((a, b) => a * b)
            / nums[i],
    );
  }
  return output;
};

// eslint-disable-next-line
console.log(products([1, 2, 3, 4, 5]));
