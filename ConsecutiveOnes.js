/**
 *
 * Return the longest run of 1s for a given integer n's binary representation.
 *
 * @param {Number} n
 * @returns {Number}
 */
const longestRun = (n) => {
  const str = n.toString(2);
  let longest = 0;
  let currentCount = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '1') {
      currentCount += 1;
    } else {
      if (currentCount > longest) {
        longest = currentCount;
      }
      currentCount = 0;
    }
  }
  if (currentCount > longest) {
    longest = currentCount;
  }
  return longest;
};

// eslint-disable-next-line
console.log(longestRun(7));
