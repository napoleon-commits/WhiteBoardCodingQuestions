for (let i = 1; i <= 100; i += 1) {
  // eslint-disable-next-line
  console.log(`${i % 3 === 0 ? 'fizz' : ''}${i % 5 === 0 ? 'buzz' : ''}${((i % 3 !== 0) && (i % 5 !== 0)) ? i : ''}`);
}
