import Queue from "../Queue/Queue.js";

export class NAryTree {
  constructor(value) {
    this.key = value;
    this.children = new Queue();
  }

  static levelOrderTraversal = (root) => {
    if (root == null) return;

    let queue = new Queue();
    queue.enqueue(root);

    while (queue.length > 0) {
      let parent = queue.peek();
      queue.dequeue();
      console.log(parent.key + " ");
      let children = parent.children.getArray();
      for (let child of children) queue.enqueue(child.value);
    }
  };

  static findTree = (root, key) => {
    if (root == null) return;

    let queue = new Queue();
    queue.enqueue(root);

    while (queue.length > 0) {
      let parent = queue.peek();
      queue.dequeue();
      if (parent.key == key) return parent;
      let children = parent.children.getArray();
      for (let child of children) queue.enqueue(child.value);
    }
    return null;
  };
}

// let root = new NAryTree(12);
// root.children.enqueue(new NAryTree(22));
// root.children.enqueue(new NAryTree(23));
// root.children.enqueue(new NAryTree(24));

// let someChild = root.children.find(22);

// someChild.value.children.enqueue(new NAryTree(25));

// let test = NAryTree.findTree(root, 25)

// NAryTree.levelOrderTraversal(root);

// console.log(root.children.getArray());
