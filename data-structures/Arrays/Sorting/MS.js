// Merge sort
function merge(arr, left, mid, right) {
  // mid is inclusive, thus need to add 1 to n1
  let n1 = (mid - left) + 1;
  let n2 = right - mid;

  let leftArr = new Array(n1);
  let rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
  for (let j = 0; j < n2; j++) rightArr[j] = arr[mid + 1 + j];

  let leftPtr = 0,
    rightPtr = 0,
    mergedPtr = left;

  while (leftPtr < n1 && rightPtr < n2) {
    if (leftArr[leftPtr] <= rightArr[rightPtr]) {
      arr[mergedPtr] = leftArr[leftPtr];
      leftPtr++;
    } else {
      arr[mergedPtr] = rightArr[rightPtr];
      rightPtr++;
    }
    mergedPtr++;
  }

  while (leftPtr < n1) {
    arr[mergedPtr] = leftArr[leftPtr];
    leftPtr++;
    mergedPtr++;
  }

  while (rightPtr < n2) {
    arr[mergedPtr] = rightArr[rightPtr];
    rightPtr++;
    mergedPtr++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

let arr = [12, 11, 13, 5, 6, 7];
let arr_size = arr.length;

mergeSort(arr, 0, arr_size - 1);

console.log(arr)