const arr = [];

const numberOfItems = 10;

let max = Number.NEGATIVE_INFINITY;

for (let i = 0; i < numberOfItems; i += 1) {
  const newNumber = Math.floor(Math.random() * 10);
  if (max < newNumber) {
    max = newNumber;
  }
  arr.push(newNumber);
}

const countingSortArray = [];

for (let i = 0; i < numberOfItems; i += 1) {
  if (countingSortArray[arr[i]]) {
    countingSortArray[arr[i]] += 1;
  } else {
    countingSortArray[arr[i]] = 1;
  }
}

const sortedArray = [];

for (let i = 0; i < countingSortArray.length; i += 1) {
  if (countingSortArray[i]) {
    for (let j = 0; j < countingSortArray[i]; j += 1) {
      sortedArray.push(i);
    }
  }
}

// eslint-disable-next-line
console.log(sortedArray);
