// Insertion Sort
function insertionSort (arr, length) {
    for(let i = 1; i < length; i++) {
        let curr = arr[i];
        let j = i - 1;

        while(j >= 0 && curr < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
}

let arr = [12,13,11,1,3,5,22];
let n = arr.length;
insertionSort(arr, n)
console.log(arr)