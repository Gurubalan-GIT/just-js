function getData() {
  console.log("Fetching from API");
}

function handleInputDebounce(callback, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(context, args), delay);
  };
}

let handleDebounceOnChange = handleInputDebounce(getData, 1000);
