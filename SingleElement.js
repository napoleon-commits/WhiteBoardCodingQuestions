function dec2bin(dec) {
  return dec.toString(2);
}

function bin2dec(bin) {
  return parseInt(bin, 2);
}

function xor(num1, num2) {
  let binary1 = dec2bin(num1);
  let binary2 = dec2bin(num2);
  let longest;
  if (binary1.length > binary2.length) {
    longest = binary1.length;
  } else {
    longest = binary2.length;
  }
  binary1 = binary1.padStart(longest, '0');
  binary2 = binary2.padStart(longest, '0');
  let result = '';
  for (let i = 0; i < longest; i += 1) {
    if (binary1[i] === binary2[i]) {
      result += '0';
    } else {
      result += '1';
    }
  }
  return bin2dec(result);
}

/**
 *
 * Given an array of integers, nums, where all numbers occur twice except
 * one number which occurs once,find the number.
 * Your solution should ideally be O(n) time and use constant extra space.
 *
 * @param {Array} nums
 * @returns {Number}
 */
function findSingle(nums) {
  let single = 0;
  for (let i = 0; i < nums.length; i += 1) {
    single = xor(single, nums[i]);
  }
  return single;
}

const nums = [1, 1, 3, 4, 4, 5, 6, 5, 6];
// eslint-disable-next-line
console.log(findSingle(nums));
