import LinkedList from "../LinkedList/SLL.js";

export default class Queue extends LinkedList {
  constructor() {
    super();
    this.length = 0;
  }

  isEmpty() {
    return !this.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  enqueue(value) {
    this.append(value);
    this.length++;
  }

  dequeue() {
    this.length--;
    return this.deleteHead();
  }
}
