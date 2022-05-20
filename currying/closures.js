// An example of currying with closures with generic spread out args, we can have it specific to a function as well.
function outer (...args1) {
    function inner (...args2) {
        return args1.concat(args2);
    }
    return inner;
}

const result = outer(1, 2, 3)(4, 5, 6);
console.log(result);