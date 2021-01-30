/**
 *
 * Given a string, you need to reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 *
 * @param {String} str
 *
 * @returns {String}
 */
const reverseWords = (str) => {
  const newArr = str.split(' ');
  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] = newArr[i].split('').reverse().join('');
  }
  return newArr.join(' ');
};

// eslint-disable-next-line
console.log(
  reverseWords('The cat in the hat'),
);
