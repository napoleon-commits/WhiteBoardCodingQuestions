const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const numbers = [1, 5, 10, 50, 100, 500, 1000];
/**
 *
 * Given a Roman numeral, find the corresponding decimal value.
 * Inputs will be between 1 and 3999.
 *
 * @param {String} s
 * @returns {Number}
 */
const romanToInt = (s) => {
  let int = 0;
  let i = 0;
  while (i < s.length) {
    if (i === s.length - 1) {
      int += numbers[romanNumerals.indexOf(s[i])];
      i += 1;
    } else if (romanNumerals.indexOf(s[i]) < romanNumerals.indexOf(s[i + 1])) {
      int += (
        numbers[romanNumerals.indexOf(s[i + 1])]
        - numbers[romanNumerals.indexOf(s[i])]
      );
      i += 2;
    } else {
      int += numbers[romanNumerals.indexOf(s[i])];
      i += 1;
    }
  }
  return int;
};

// eslint-disable-next-line
console.log(
  romanToInt('IX'),
);
// eslint-disable-next-line
console.log(
  romanToInt('VII'),
);
// eslint-disable-next-line
console.log(
  romanToInt('MCMIV'),
);
