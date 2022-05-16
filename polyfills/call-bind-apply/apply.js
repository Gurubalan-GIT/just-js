Function.prototype.customApply = function (contextObj, args) {
    contextObj.fn = this;
    return contextObj.fn(...args);
  };