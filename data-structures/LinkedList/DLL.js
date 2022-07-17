// Doubly Linked List
export default class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  static getNewNode = ({ prev = null, value, next = null }) => ({
    prev,
    value,
    next,
  });

  append(value) {
    let newNode = DLL.getNewNode({ value });
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  find(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  deleteAll(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (this.head === currentNode) {
          this.head = currentNode.next;
          this.head.prev = null;
          if (this.tail === currentNode) this.tail = null;
        } else if (this.tail === currentNode) {
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
    return;
  }

  prepend(value) {
    let newNode = DLL.getNewNode({ value });
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  toArray() {
    let elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

let dll = new DLL();

dll.append(333);
dll.append("Hello!");
dll.prepend(455);
dll.append(333);

dll.deleteAll(333);

console.log(dll.toArray());
