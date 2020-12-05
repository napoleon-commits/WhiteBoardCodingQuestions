/**
 *
 * @param {number of random points on an x,y graph between (0,1)} n
 *
 * @returns {estimation of PI} Number
 */
const estimatePi = (n) => {
  let numberOfPointsWithinCircle = 0;
  for (let i = 0; i < n; i += 1) {
    if (
      (
        Math.sqrt(
          (Math.random()) ** 2
                    + (Math.random()) ** 2,
        )
      ) < 1
    ) {
      numberOfPointsWithinCircle += 1;
    }
  }
  return ((4 * numberOfPointsWithinCircle) / n);
};

// eslint-disable-next-line
console.log(estimatePi(9999999));
