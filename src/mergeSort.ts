function mergeSort(arr: number[]) : number[] {
  // Base case
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, midPoint));
  const rightArr = mergeSort(arr.slice(midPoint));

  return merge(leftArr, rightArr);
}

function merge(leftArr: number[], rightArr: number[]) : number[] {
  const mergedArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    const arrWithMin = leftArr[0] <= rightArr[0] ? leftArr : rightArr;
    mergedArr.push(arrWithMin.shift()!); // ! = not null/undefined assertion
  }
  return mergedArr.concat(leftArr, rightArr);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
console.log(mergeSort([4, 2, 7, 1])); // [1, 2, 4, 7]
console.log(mergeSort([10, -1, 0, 5])); // [-1, 0, 5, 10]
console.log(mergeSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeSort([9, 8, 7, 6, 5])); // [5, 6, 7, 8, 9]
console.log(mergeSort([3, 3, 3, 3, 3])); // [3, 3, 3, 3, 3]
console.log(mergeSort([42])); // [42]
console.log(mergeSort([])); // []
console.log(mergeSort([5, 3, 8, 3, 9, 1, 5])); // [1, 3, 3, 5, 5, 8, 9]
console.log(mergeSort([999999, 333333, 777777])); // [333333, 777777, 999999]
console.log(mergeSort([-10, 20, 0, -5, 5])); // [-10, -5, 0, 5, 20]
