Function.prototype.customCall = function (contextObj, ...args) {
    // See, the this key word basically is the object which holds the function. So inside a function,
    // this refers to the context holder object. ( Whichever object that holds this function ).
    contextObj.fn = this;
    return contextObj.fn(...args);
  };