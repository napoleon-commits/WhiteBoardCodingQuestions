/**
 *
 * You are given a string s, and an integer k.
 * Return the length of the longest substring in s that contains at most k distinct characters.
 *
 * @param {String} s
 * @param {Number} k
 *
 * @returns {Number}
 */
const longestSubstringWithKDistinctChars = (s, k) => {
  let longestSubstring = '';
  for (let i = 0; i < s.length; i += 1) {
    const substring = s.substring(i);
    let distinctCount = 0;
    let substringIndex = 0;
    let testLongestString = '';
    while (distinctCount <= k && substringIndex < substring.length) {
      if (testLongestString.includes(substring[substringIndex]) === false) {
        distinctCount += 1;
      }
      if (distinctCount <= k) {
        testLongestString += substring[substringIndex];
      }
      substringIndex += 1;
    }
    if (testLongestString.length > longestSubstring.length) {
      longestSubstring = testLongestString;
    }
  }
  return longestSubstring.length;
};

// eslint-disable-next-line
console.log(
  longestSubstringWithKDistinctChars('aabcdefff', 3),
);
