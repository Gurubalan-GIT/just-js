// Window resize analytics to be pushed to API, performance is optimized by throttling
// Used to analyze how often the user has resized the window 
function pushResizeAnalytics() {
  console.log("Posting to API...");
}

function windowResizeThrottle(callback, delay) {
  let hasFiredResizeEventFlag = false;
  return function (event, ...args) {
    if (!hasFiredResizeEventFlag) {
      console.log(event, "event");
      let context = this;
      callback.call(context, event, ...args);
      hasFiredResizeEventFlag = true;
      setTimeout(() => {
        hasFiredResizeEventFlag = false;
      }, delay);
    }
  };
}

const handleResizeThrottle = windowResizeThrottle(pushResizeAnalytics, 1000);

window.addEventListener("resize", (event) => handleResizeThrottle(event));
