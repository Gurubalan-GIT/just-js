// Bubbling
document
  .querySelector("#grand-parent")
  .addEventListener("click", function (event) {
    console.log("Grandparent clicked");
  });

  document
  .querySelector("#parent")
  .addEventListener("click", function (event) {
    console.log("Parent clicked");
  });


  document
  .querySelector("#child")
  .addEventListener("click", function (event) {
    console.log("child clicked");
  });

    // Capturing
    document
    .querySelector("#grand-parent")
    .addEventListener("click", function (event) {
        console.log("Capturing event");
      console.log("Grandparent clicked");
    }, true);
  
    document
    .querySelector("#parent")
    .addEventListener("click", function (event) {
      console.log("Parent clicked");
      event.stopPropagation()
    }, true);
  
  
    document
    .querySelector("#child")
    .addEventListener("click", function (event) {
      console.log("child clicked");
    }, true);

    // Understand the true / false values are to execute the call back functions 
    // during the capturing phase and bubbling phase. Always the cycle of propagation goes from the top to the bottom and then vice-versa.
    // That is, the capturing phase is executed first and then the bubbling phase.
    // During these cycles, depending on the boolean values, the call back functions are executed. Which is why capturing gets executed first.
    // You can stop the propagation of the event by calling the stopPropagation() method. If this is executed in the capturing phase, then the bubbling phase will not be executed.