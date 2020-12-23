/**
 *
 * @param {2D Array} matrix
 * @param {String} word
 *
 * @returns {Boolean} if the word is in the matrix
 */
const wordSearch = (matrix, word) => {
  let found = false;
  let x = 0;
  let y = 0;
  while (found === false && x < matrix[0].length && y < matrix.length) {
    // found first letter
    if (matrix[y][x] === word[0]) {
      let attemptedWord = word[0];
      let subStringIndex = 0;
      let searchX = x + 1;
      let searchY = y;

      // search right
      while (
        attemptedWord === word.substring(0, subStringIndex + 1)
                && (searchX < matrix[0].length)
                && found === false
      ) {
        attemptedWord += matrix[searchY][searchX];
        searchX += 1;
        subStringIndex += 1;
        if (attemptedWord === word) {
          found = true;
        }
      }

      // eslint-disable-next-line
      attemptedWord = word[0];
      subStringIndex = 0;
      searchX = x;
      searchY = y + 1;

      // search down
      while (
        attemptedWord === word.substring(0, subStringIndex + 1)
                && (searchY < matrix.length)
                && found === false
      ) {
        attemptedWord += matrix[searchY][searchX];
        searchY += 1;
        subStringIndex += 1;
        if (attemptedWord === word) {
          found = true;
        }
      }
    }

    if (x + 1 === matrix[0].length) {
      x = 0;
      y += 1;
    } else {
      x += 1;
    }
  }
  return found;
};

// eslint-disable-next-line
console.log(
  wordSearch(
    [
      ['M', 'G', 'C', 'I'],
      ['F', 'O', 'A', 'M'],
      ['D', 'A', 'O', 'B'],
      ['G', 'M', 'S', 'S'],
    ],
    'FOAX',
  ),
);
