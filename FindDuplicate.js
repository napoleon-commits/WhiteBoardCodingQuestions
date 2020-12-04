/**
 * Given an array of length, n + 1
 * That contains the values of 1 through n with one number repeating.
 * 
 * Find the repeating integer with the following constraints:
 * 
 * Space complexity: O(1).
 * Time complexity: O(n^2).
 * Can't modify array.
 * 
 * @param {*} arr
 * 
 * @returns {Repeating Number} Integer
 */
const findDuplicate = (arr) => {
    let tortoise = arr[0];
    let hare = arr[0];
    while(1){
        tortoise = arr[tortoise];
        hare = arr[arr[hare]];
        if(tortoise === hare) break;
    }
    let pointer1 = arr[0];
    let pointer2 = tortoise;
    while(pointer1 !== pointer2){
        pointer1 = arr[pointer1];
        pointer2 = arr[pointer2];
    }
    return pointer1;
};
/**
 * BEGIN - CREATE ARRAY THAT COMPLIES TO THE CONSTAINTS ABOVE
 */
const arr = [];
for(let i = 1; i < 10; i+=1){
    arr.push(i);
}
for(let i = 0; i < arr.length; i+=1){
    const randomSpot = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomSpot];
    arr[randomSpot] = arr[i];
    arr[i] = randomElement;
}
arr.push(Math.ceil(Math.random() * arr.length));
console.log(arr);
/**
 * END - CREATE ARRAY THAT COMPLIES TO THE CONSTAINTS ABOVE
 */
console.log(
    findDuplicate(arr)
);