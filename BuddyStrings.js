/**
 *
 * Replaces a char in a string
 *
 * @param {String} str
 * @param {Number} index
 * @param {Char} chr
 *
 * @returns {String}
 */
const setCharAt = (str, index, chr) => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
};

/**
 *
 * Given two strings A and B of lowercase letters,
 * return true if and only if we can swap two letters in A so that the result equals B.
 *
 * @param {String} A
 * @param {String} B
 *
 * @returns {Boolean}
 */
const buddyStrings = (A, B) => {
  if (A.length !== B.length) return false;
  let aIndex = 0;
  let possible = false;
  while (aIndex < A.length) {
    for (let i = 0; i < A.length; i += 1) {
      if (aIndex !== i) {
        let testString = A;
        const char1 = testString[aIndex];
        const char2 = testString[i];
        testString = setCharAt(testString, aIndex, char2);
        testString = setCharAt(testString, i, char1);
        if (testString === B) possible = true;
      }
    }
    aIndex += 1;
  }
  return possible;
};

// eslint-disable-next-line
console.log(buddyStrings('ab', 'ba'));
// eslint-disable-next-line
console.log(buddyStrings('ab', 'ab'));
// eslint-disable-next-line
console.log(buddyStrings('aa', 'aa'));
// eslint-disable-next-line
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));
// eslint-disable-next-line
console.log(buddyStrings('', 'aa'));
