const recursiveFib = (n) => {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};

const iterativeFib = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    arr.push(
      arr[i - 1] + arr[i - 2],
    );
  }
  return arr[n];
};

// eslint-disable-next-line
console.log(recursiveFib(0));
// eslint-disable-next-line
console.log(recursiveFib(1));
// eslint-disable-next-line
console.log(recursiveFib(2));
// eslint-disable-next-line
console.log(recursiveFib(3));
// eslint-disable-next-line
console.log(recursiveFib(4));
// eslint-disable-next-line
console.log(recursiveFib(5));
// eslint-disable-next-line
console.log(recursiveFib(6));
// eslint-disable-next-line
console.log('-------------');
// eslint-disable-next-line
console.log(iterativeFib(0));
// eslint-disable-next-line
console.log(iterativeFib(1));
// eslint-disable-next-line
console.log(iterativeFib(2));
// eslint-disable-next-line
console.log(iterativeFib(3));
// eslint-disable-next-line
console.log(iterativeFib(4));
// eslint-disable-next-line
console.log(iterativeFib(5));
// eslint-disable-next-line
console.log(iterativeFib(6));
