/**
 *
 * @param {2D Array} matrix
 * @param {String} word
 *
 * @returns {Boolean} if the word is in the matrix
 */
const wordSearch = (matrix, word) => {
  let found = true;
  let i = 0;
  while (found && i < word.length) {
    found = matrix[i].includes(word[i]);
    i += 1;
  }
  return found;
};

// eslint-disable-next-line
console.log(
  wordSearch(
    [
      ['F', 'A', 'C', 'I'],
      ['O', 'B', 'Q', 'P'],
      ['A', 'N', 'O', 'B'],
      ['M', 'A', 'S', 'S'],
    ],
    'FOAM',
  ),
);
