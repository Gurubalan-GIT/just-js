let N = 4;
let A = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];
let B = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let C = Array.from(Array(N), () => Array(N));

for (let i in A) {
  for (let j in B) {
    C[i][j] = A[i][j] - B[i][j];
  }
}

console.log(C)