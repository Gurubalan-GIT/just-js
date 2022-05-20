// Window resize analytics to be pushed to API, performance is optimized by debouncing
// Used to find how many TIMES the user has resized the window accurately
function pushResizeAnalytics(resizeCount, ...args) {
  console.log("Posting to API...", resizeCount);
}

function windowResizeDebounce(callback, delay) {
  let timer,
    resizeCount = 0;
  return function (event, ...args) {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(event, "event");
      resizeCount++;
      callback.call(context, resizeCount, ...args);
    }, delay);
  };
}

const handleResizeDebounce = windowResizeDebounce(pushResizeAnalytics, 1000);

window.addEventListener("resize", (event) => handleResizeDebounce(event));
