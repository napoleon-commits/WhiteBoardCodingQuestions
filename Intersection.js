/**
 *
 * Given two arrays, write a function to compute their intersection -
 * the intersection means the numbers that are in both arrays.
 *
 * @param {Array} nums1
 * @param {Array} nums2
 *
 * @returns {Array} output
 */
const intersection = (nums1, nums2) => {
  const output = [];
  const shorterArray = (nums1.length < nums2.length) ? nums1 : nums2;
  const otherArray = (nums1.length < nums2.length) ? nums2 : nums1;
  for (let i = 0; i < shorterArray.length; i += 1) {
    if (otherArray.includes(shorterArray[i])) {
      if (output.includes(shorterArray[i]) === false) {
        output.push(shorterArray[i]);
      }
    }
  }
  return output;
};

// eslint-disable-next-line
console.log(
  intersection([1, 2, 2, 1], [2, 2]),
);
// eslint-disable-next-line
console.log(
  intersection([4, 9, 5], [9, 4, 9, 8, 4]),
);
