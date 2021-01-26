const arr = [];
const numberOfItems = 10;

for (let i = 0; i < numberOfItems; i += 1) {
  const newNumber = Math.floor(Math.random() * 10);
  arr.push(newNumber);
}

// eslint-disable-next-line
console.log(arr);

const leftChildIndex = (i) => (2 * i + 1);
const rightChildIndex = (i) => (2 * i + 2);

const initializeHeap = (root) => {
  let doneBubblingDown = false;
  let bubbleIndex = 0;
  const copyArr = root;
  while (doneBubblingDown === false && bubbleIndex < copyArr.length) {
    if (
      copyArr[leftChildIndex(bubbleIndex)] !== undefined
        && copyArr[rightChildIndex(bubbleIndex)] !== undefined
    ) {
      let smallestIndex = null;
      let smallestNode = null;
      if (copyArr[leftChildIndex(bubbleIndex)] < copyArr[rightChildIndex(bubbleIndex)]) {
        smallestIndex = leftChildIndex(bubbleIndex);
        smallestNode = copyArr[leftChildIndex(bubbleIndex)];
      } else {
        smallestIndex = rightChildIndex(bubbleIndex);
        smallestNode = copyArr[rightChildIndex(bubbleIndex)];
      }
      if (copyArr[bubbleIndex] > smallestNode) {
        const t1 = copyArr[bubbleIndex];
        const t2 = smallestNode;
        copyArr[bubbleIndex] = t2;
        copyArr[smallestIndex] = t1;
        bubbleIndex = smallestIndex;
      } else {
        doneBubblingDown = true;
      }
    } else if (copyArr[leftChildIndex(bubbleIndex)] !== undefined) {
      if (copyArr[bubbleIndex] > copyArr[leftChildIndex(bubbleIndex)]) {
        const t1 = copyArr[bubbleIndex];
        const t2 = copyArr[leftChildIndex(bubbleIndex)];
        copyArr[bubbleIndex] = t2;
        copyArr[leftChildIndex(bubbleIndex)] = t1;
        bubbleIndex = leftChildIndex(bubbleIndex);
      } else {
        doneBubblingDown = true;
      }
    } else {
      doneBubblingDown = true;
    }
  }
  return copyArr;
};

let heapArr = [];

for (let i = 0; i < arr.length; i += 1) {
  heapArr.unshift(arr[i]);
  heapArr = initializeHeap(heapArr);
}

const sortedArr = [];

while (heapArr.length > 0) {
  sortedArr.push(heapArr.shift());
  const tail = heapArr.pop();
  if (tail) {
    heapArr.unshift(tail);
    heapArr = initializeHeap(heapArr);
  }
}

// eslint-disable-next-line
console.log(sortedArr);
