/**
 *
 * Given an array of integers, nums, where all numbers occur twice except
 * one number which occurs once,find the number.
 * Your solution should ideally be O(n) time and use constant extra space.
 *
 * @param {Array} nums
 * @returns {Number}
 */
function findSingle(nums) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]] += 1;
    }
  }
  let foundSingleBool = false;
  let i = 0;
  let single;
  while (foundSingleBool === false && i < Object.keys(hashMap).length) {
    if (hashMap[Object.keys(hashMap)[i]] === 1) {
      single = Object.keys(hashMap)[i];
      foundSingleBool = true;
    } else {
      i += 1;
    }
  }
  return single;
}

const nums = [1, 1, 3, 4, 4, 5, 6, 5, 6];
// eslint-disable-next-line
console.log(findSingle(nums));
