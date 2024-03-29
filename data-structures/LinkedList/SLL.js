import pkg from "lodash";
const { isEqual } = pkg;

// Singly Linked
export default class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  static getNewNode(value) {
    return { value, next: null };
  }

  append(value) {
    let newNode = SLL.getNewNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    let newNode = SLL.getNewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  getArray() {
    let elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }

  find(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value.key === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  insertAfter(value, afterValue) {
    let existingNode = this.find(afterValue);
    if (existingNode) {
      let newNode = SLL.getNewNode(value);
      newNode.next = existingNode.next;
      existingNode.next = newNode;
    }
  }

  deleteAll(value) {
    if (!this.head) return;
    let currentNode = this.head;
    while (currentNode.next) {
      if (isEqual(currentNode.next.value, value)) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.head.value === value) {
      this.head = this.head.next || null;
    }
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return value;
  }

  deleteHead() {
    if (!this.head) return null;
    let deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }
}

// let sll = new SLL();
// sll.prepend({id: 1, value: "testing!"});
// sll.append("Hello!");
// sll.append(20000);
// sll.append(20000);
// sll.append("Hello!");
// sll.prepend(4000);
// sll.insertAfter(8000, "Hello!");
// sll.deleteAll("Hello!")

// console.log(sll.toArray());
