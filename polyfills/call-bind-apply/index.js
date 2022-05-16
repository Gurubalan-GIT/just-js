require("./apply");
require("./bind");
require("./call");

// Call, bind & apply polyfill

const obj = {
    name: "John",
    age: 44,
    getText: function (gender, state) {
      console.log(this.name + " " + this.age + " " + gender + " " + state);
    },
  };
  
  const obj2 = {
    name: "Jane",
    age: 33,
  };

  let getTextWithObj2Context = obj.getText.customBinder(obj2, 'female')
  getTextWithObj2Context('Chennai')