/**
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 *      determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * - Note that an empty string is also considered valid.
 *
 * @param {String} s
 * @returns {Boolean} is the string a valid parenthesis for a compiler
 */
const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (
      s[i] === '('
        || s[i] === '{'
        || s[i] === '['
    ) {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      }
    } else if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      }
    } else if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
};

// eslint-disable-next-line
console.log(isValid('()(){(())'));
// eslint-disable-next-line
console.log(isValid(''));
// eslint-disable-next-line
console.log(isValid('([{}])()'));
