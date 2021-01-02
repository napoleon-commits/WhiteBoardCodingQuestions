/**
 * 
 * Given a list, find the k-th largest element in the list
 * 
 * @param {Array} nums 
 * @param {index} k 
 */
const findKthLargest = (nums, k) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i += 1) {
    hashMap[nums[i]] = true;
  }
  return Object.keys(hashMap)[k];
};

// eslint-disable-next-line
console.log(
  findKthLargest([3, 5, 2, 4, 6, 8], 3),
);
