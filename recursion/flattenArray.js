let arr = [[1, 2, 3], [1, 2, [4, 5]], [2, 3, 78, [10, 11, 22]], 1, 3345];

console.log("Original Array:", arr);

Array.prototype.flattenArray = function (depth = 1) {
  let flattenedArray = [];
  for (let element of this) {
    if (Array.isArray(element) && depth > 0) {
      flattenedArray.push(...element.flattenArray(depth - 1));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

console.log(arr.flattenArray());