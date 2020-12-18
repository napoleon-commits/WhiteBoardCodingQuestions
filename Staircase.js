let numberOfWays = 0;

/**
 *
 * You are given a positive integer N which represents the number of steps in a staircase.
 * You can either climb 1 or 2 steps at a time.
 * Write a function that returns the number of unique ways to climb the stairs.
 *
 * @param {Number} n , number of steps in a staircase
 *
 * @returns {Number} Number of possible ways to climb stairs
 */
const staircase = (n) => {
  if (n < 0) return;
  if (n === 0) numberOfWays += 1;
  staircase(n - 2);
  staircase(n - 1);
  // eslint-disable-next-line
  return numberOfWays;
};

// eslint-disable-next-line
console.log(staircase(5));
