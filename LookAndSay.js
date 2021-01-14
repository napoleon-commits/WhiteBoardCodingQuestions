/**
 *
 * A look-and-say sequence is defined as the integer sequence
 * beginning with a single digit in which the next term is obtained by describing the previous term.
 *
 * @param {String} str
 *
 * @returns {String} the nth term of this sequence
 */
const lookAndSay = (num, nth) => {
  const sequenceArray = [];
  sequenceArray.push(`${num}`);
  for (let i = 1; i < (nth + 1); i += 1) {
    let count = 0;
    let number = null;
    let newStr = '';
    for (let j = 0; j < sequenceArray[i - 1].length; j += 1) {
      if (count === 0) {
        count = 1;
        number = sequenceArray[i - 1][j];
        if (j + 1 === sequenceArray[i - 1].length) {
          newStr += `${count}${number}`;
        }
      } else if (number === sequenceArray[i - 1][j]) {
        count += 1;
        if (j + 1 === sequenceArray[i - 1].length) {
          newStr += `${count}${number}`;
        }
      } else {
        newStr += `${count}${number}`;
        count = 1;
        number = sequenceArray[i - 1][j];
        if (j + 1 === sequenceArray[i - 1].length) {
          newStr += `${count}${number}`;
        }
      }
    }
    sequenceArray.push(newStr);
  }
  // eslint-disable-next-line
  console.log(sequenceArray);
  return sequenceArray[nth];
};

// eslint-disable-next-line
console.log(
  lookAndSay(1, 5),
);
