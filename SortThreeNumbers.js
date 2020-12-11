const testArr = [];
for (let i = 0; i < 10; i += 1) {
  testArr.push((Math.floor(Math.random() * 3)) + 1);
}
if (testArr.indexOf(1) === -1) {
  testArr.push(1);
}
if (testArr.indexOf(2) === -1) {
  testArr.push(2);
}
if (testArr.indexOf(3) === -1) {
  testArr.push(3);
}

// eslint-disable-next-line
console.log(testArr);

/**
 *
 * Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.
 *
 * AKA: The Dutch national flag problem
 *
 * @param {Array} nums
 *
 * @returns {Array} a sorted array of the nums parameter
 */
const sortNums = (nums) => {
  const copyNums = nums;
  const middle = 2;
  let i = 0;
  let j = 0;
  let n = copyNums.length - 1;
  while (j <= n) {
    if (copyNums[j] < middle) {
      const temp1 = copyNums[j];
      const temp2 = copyNums[i];
      copyNums[i] = temp1;
      copyNums[j] = temp2;
      i += 1;
      j += 1;
    } else if (copyNums[j] > middle) {
      const temp1 = copyNums[n];
      const temp2 = copyNums[j];
      copyNums[n] = temp2;
      copyNums[j] = temp1;
      n -= 1;
    } else {
      j += 1;
    }
  }
  return copyNums;
};

// eslint-disable-next-line
console.log(sortNums(testArr));
