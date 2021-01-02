/**
 * Given an array,nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements
 */
class Solution {
  // eslint-disable-next-line
  moveZeros(nums) {
    const copyNums = nums;
    let zeroIndex = -1;
    for (let i = 0; i < copyNums.length; i += 1) {
      if (copyNums[i] === 0 && zeroIndex === -1) {
        zeroIndex = i;
      }
      if (copyNums[i] !== 0 && zeroIndex !== -1) {
        copyNums[zeroIndex] = copyNums[i];
        copyNums[i] = 0;
        if (copyNums[zeroIndex + 1] === 0) {
          zeroIndex += 1;
        } else {
          zeroIndex = -1;
        }
      }
    }
    return copyNums;
  }
}

const c = new Solution();
// eslint-disable-next-line
console.log(
  c.moveZeros([0, 0, 0, 2, 0, 1, 3, 4, 0, 0]),
);
// eslint-disable-next-line
console.log(
  c.moveZeros([0, 1, 0, 3, 12]),
);
