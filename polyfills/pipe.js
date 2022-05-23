function computation1(a) {
  return a * 9;
}

function computation2(a) {
  return a - 9;
}

function computation3(a) {
  return a + 234;
}

function compose(...functions) {
  let accumulator = 0;
  return function (initialValue) {
    for (let fn of functions) {
      accumulator += fn(initialValue);
    }
    return accumulator;
  };
}

const composeResult = compose(computation1, computation2, computation3);
console.log(composeResult(3));
