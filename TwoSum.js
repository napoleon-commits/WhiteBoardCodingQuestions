/**
 *
 * You are given a list of numbers, and a targer number k.
 * Retyrn whether or not there are two numbers in the list that add up to k.
 *
 * @param {Array} list
 * @param {Integer} target
 *
 * @returns {Boolean} if there are two numbers in the list that add up to k
 */
const twoSum = (list, target) => {
  const hashMap = {};
  let exists = false;
  for (let i = 0; i < list.length; i += 1) {
    if (hashMap[target - list[i]]) {
      exists = true;
    } else {
      hashMap[list[i]] = true;
    }
  }
  return exists;
};

// eslint-disable-next-line
console.log(twoSum([4, 7, 1, -3, 2], 5));
