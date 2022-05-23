// Expensive function

const expensiveComputation = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

// Calculating time for multiple calls
console.time("first-call");
console.log(expensiveComputation(4, 5));
console.timeEnd("first-call");

console.time("second-call");
console.log(expensiveComputation(4, 5));
console.timeEnd("second-call");

// Aim - Reduce the second computation time by memoization / Caching

function memoizeFunction(fn, contextObj) {
  let cache = {};
  return function (...args) {
    let cacheKey = JSON.stringify(args);
    if (!cache[cacheKey]) {
      cache[cacheKey] = fn.apply(contextObj ?? this, args);
    }
    return cache[cacheKey];
  };
}

let memoizedExpensiveComputationResult = memoizeFunction(expensiveComputation);

console.time("first-call");
console.log(memoizedExpensiveComputationResult(4, 5));
console.timeEnd("first-call");

console.time("second-call");
console.log(memoizedExpensiveComputationResult(4, 5));
console.timeEnd("second-call");
