document
  .querySelector("#categories")
  .addEventListener("click", function (event) {
    console.log("category clicked ->", event.target.id);
  });

document
  .querySelector("#form-container")
  .addEventListener("keyup", function (event) {
    if (event?.target?.dataset?.capitalize != undefined) {
      event.target.value =
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1);
    }
  });
