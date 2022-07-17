var N = 4;

// This function stores transpose
// of A in B
function transpose(A , B)
{
    var i, j;
    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            B[i][j] = A[j][i];
}

// Driver code

var A = [[ 1, 1, 1, 1 ],
[ 1, 1, 1, 1 ],
[ 1, 1, 1, 1 ],
[ 1, 1, 1, 1 ]];

var B = Array(1).fill(0);
for(let i = 0; i < N; i++){
B[i] = new Array(N);
}

transpose(A, B);

console.log("Result matrix is <br/>");
for (let i = 0; i < N; i++)
{
    for (let j = 0; j < N; j++)
        console.log(B[i][j] + " ");
    console.log("<br/>");
}
