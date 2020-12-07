/**
 *
 * Recursive function to check whether a string is a palindrone
 *
 * @param {*} str
 *
 * @returns boolean
 */
const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2 && str[0] === str[1]) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substr(1, str.length - 2));
  }
  return false;
};

/**
 *
 * Given a string, str, find the longest palindromic substring in str.
 *
 * @param {String} str
 *
 * @returns {String} the longest palindrome in a string
 */
const longestPalindrome = (str) => {
  let palindrone = '';

  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < str.length; j += 1) {
      const sub = str.substr(i, str.length - j);
      if (
        isPalindrome(sub)
                && sub.length > palindrone.length
      ) {
        palindrone = sub;
      }
    }
  }

  return palindrone;
};

const s = 'million';

// eslint-disable-next-line
console.log(longestPalindrome(s));