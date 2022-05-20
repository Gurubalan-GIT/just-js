// Search field API call, performance improved by debounce logics on input field
function getData() {
  console.log("Fetching from API");
}

let timer;
function handleInputDebounce(callback, delay) {
  return function (...args) {
    let context = this;
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => callback.apply(context, args), delay);
  };
}

let handleDebounceOnChange = handleInputDebounce(getData, 1000);
