/**
 *
 * You are given an array. Each element represents the price of a stock on that particular day.
 * Calculate and return the maximum profit you can make
 * from buying and selling that stock only once.
 *
 * @param {Array} arr An Array of stock prices.
 * @returns {Number} The maximum profit
 */
const buyAndSell = (arr) => {
  if (arr && arr.length && (arr.length === 0 || arr.length === 1)) return undefined;
  if (arr.length === 2) return arr[1] - arr[0];
  let startingIndex = 0;
  let maxProfit = Number.NEGATIVE_INFINITY;
  while (startingIndex < arr.length - 1) {
    for (let i = startingIndex + 1; i < arr.length; i += 1) {
      if ((arr[i] - arr[startingIndex]) > maxProfit) {
        maxProfit = arr[i] - arr[startingIndex];
      }
    }
    startingIndex += 1;
  }
  return maxProfit;
};

// eslint-disable-next-line
console.log(
  buyAndSell([9, 11, 8, 5, 7, 10]),
);
