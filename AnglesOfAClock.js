const convertHourHandToDegree = (h, m) => {
  const hand = h * 5;
  const inBetween = Math.floor(m / 12);
  return (hand + inBetween) * 6;
};

const convertMinuteHandToDegree = (m) => m * 6;

/**
 *
 * Given a time in the format of hour and minute,
 * calculate the angle of the hour and minute hand on a clock.
 *
 * @param {Number} hour
 * @param {Number} minute
 *
 * @returns {Number}
 */
const calcAngle = (h, m) => (convertMinuteHandToDegree(m)) - (convertHourHandToDegree(h, m));

// eslint-disable-next-line
console.log(calcAngle(3, 30));
// eslint-disable-next-line
console.log(calcAngle(12, 30));
