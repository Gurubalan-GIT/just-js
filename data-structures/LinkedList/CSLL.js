// Circular Singly Linked List
class CSLL {
  constructor() {
    this.last = null;
  }

  getNewNode(value, next = null) {
    return { value, next };
  }

  append(value) {
    let newNode = this.getNewNode(value);
    if (!this.last) {
      this.last = newNode;
      this.last.next = this.last;
    } else {
      newNode.next = this.last.next;
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  toArray() {
    let elements = [];
    let currentHeadNode = this.last.next;
    while (currentHeadNode !== this.last) {
      elements.push(currentHeadNode);
      currentHeadNode = currentHeadNode.next;
    }
    elements.push(this.last);
    return elements;
  }
}

let csll = new CSLL();

csll.append(222);
csll.append("Hello!");
csll.append("Hello World!");
csll.append(500);

console.log(csll.toArray());
