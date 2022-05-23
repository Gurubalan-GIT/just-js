function sampleSuccessPromise(content, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(content);
    }, delay);
  });
}

function sampleFailedPromise(content, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(content);
    }, delay);
  });
}

// Custom Polyfill
function promiseAll(promises = []) {
  let values = [];
  return new Promise((resolve, reject) => {
    for (let promiseIndex in promises) {
      promises[promiseIndex]
        .then((response) => {
          values.push(response);
          if (promiseIndex == promises.length - 1) {
            resolve(values);
          }
        })
        .catch((error) => reject(error));
    }
  });
}

// Original function
const result = Promise.all([
  sampleSuccessPromise("Hello there!", 1000),
  sampleSuccessPromise("World!"),
  sampleFailedPromise("Hello world"),
]);

result
  .then((values) => console.log(values))
  .catch((err) => console.log("error -", err));

const customResult = promiseAll([
  sampleSuccessPromise("Hello there!", 1000),
  sampleSuccessPromise("World!"),
  sampleSuccessPromise("Hello world"),
]);

customResult
  .then((values) => console.log(values))
  .catch((err) => console.log("error -", err));
