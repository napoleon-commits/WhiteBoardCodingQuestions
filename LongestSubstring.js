/**
 *
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * @param {String} s
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length === 1) return 1;
  let longestLength = 1;
  let currentLength = 1;
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 1;
    } else {
      currentLength += 1;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  return longestLength;
};

// eslint-disable-next-line
console.log(lengthOfLongestSubstring('abrkaabcdefghijjxxx'));