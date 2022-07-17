// Stacks with Arrays
export default class StackArray {
  constructor(size) {
    this.stack = size ? new Array(size) : [];
    this.maxSize = size;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    this.stack.pop();
  }

  getSize() {
    return this.stack.length;
  }

  isEmpty() {
    return !!this.stack.length;
  }

  peek() {
    return this.stack[this.getSize() - 1] || null;
  }

  isFull() {
    return this.maxSize === this.getSize();
  }
}

let stack = new StackArray(5);
stack.push(12);
stack.push("Hello!");
stack.pop();

console.log(stack);
console.log(stack.getSize());
console.log(stack.peek());
