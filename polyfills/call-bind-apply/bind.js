Function.prototype.customBinder = function (contextObj, ...args) {
    let self = this;
    return function (...args2) {
      // Can use apply as well here.
      return self.customCall(contextObj, ...args, ...args2);
    };
  };