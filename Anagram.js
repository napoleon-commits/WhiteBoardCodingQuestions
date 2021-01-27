/**
 *
 * @param {String} word1
 * @param {String} word2
 *
 * @returns {Boolean}
 */
const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  let isAnagramBool = true;
  let copyWord2 = word2;
  let word1Index = 0;
  while (isAnagramBool && word1Index < word1.length) {
    const letter = word1[word1Index];
    const word2Index = copyWord2.indexOf(letter);
    if (word2Index === -1) {
      isAnagramBool = false;
    } else {
      copyWord2 = copyWord2.replace(copyWord2[word2Index], '');
      word1Index += 1;
    }
  }
  return isAnagramBool;
};

/**
 *
 * Given a list of words, group the words that are anagrams of each other.
 *
 * @param {Array} strs
 *
 * @returns {Array} of grouped anagrams
 */
const groupAnagramWords = (strs) => {
  const output = [];
  const copyList = strs;
  while (copyList.length > 0) {
    const testWord = copyList[0];
    copyList.splice(0, 1);
    let foundAnagram = false;
    let searchIndex = 0;
    while (foundAnagram === false && searchIndex < copyList.length) {
      if (isAnagram(testWord, copyList[searchIndex])) {
        foundAnagram = true;
        output.push([testWord, copyList[searchIndex]]);
        copyList.splice(searchIndex, 1);
      } else {
        searchIndex += 1;
      }
    }
    if (foundAnagram === false) {
      output.push([testWord]);
    }
  }
  return output;
};

// eslint-disable-next-line
console.log(
  groupAnagramWords(['abc', 'bcd', 'cba', 'cbd', 'efg']),
);
