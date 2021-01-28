/**
 *
 * @param {Array} arr
 *
 * @returns {Array}
 */
const sortArray = (arr) => arr.sort((a, b) => a - b);

/**
 *
 * @param {Array} arr
 *
 * @returns {Number}
 */
const median = (arr) => {
  if (arr.length === 1) return arr[0];
  if (arr.length % 2 === 0) { // even
    const sortedArr = sortArray(arr);
    const numberOfValues = sortedArr.length;
    return (
      (
        (
          sortedArr[(numberOfValues / 2) - 1])
            + (sortedArr[Math.floor((numberOfValues + 1) / 2)])
      ) / 2
    );
  }
  if (arr.length % 2 === 1) { // odd
    const sortedArr = sortArray(arr);
    const numberOfValues = sortedArr.length - 1;
    return sortedArr[Math.floor((numberOfValues + 1) / 2)];
  }
  return Number.POSITIVE_INFINITY;
};

/**
 *
 * You are given a stream of numbers. Compute the median for each element
 *
 * @param {Array} stream
 *
 * @returns {Array}
 */
const runningMedian = (stream) => {
  const output = [];
  const copyOfStream = [];
  for (let i = 0; i < stream.length; i += 1) {
    copyOfStream.push(stream[i]);
    output.push(median(copyOfStream));
  }
  return output;
};

// eslint-disable-next-line
console.log(
  runningMedian([2, 1, 4, 7, 2, 0, 5]),
);
