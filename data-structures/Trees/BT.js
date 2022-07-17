export class BT {
  constructor(value) {
    this.item = value;
    this.right = this.left = null;
  }

  traverseInOrder(node) {
    if (node === null) return;

    this.traverseInOrder(node.left);

    console.log(node.item);

    this.traverseInOrder(node.right);
  }

  traversePostOrder(node) {
    if (node === null) return;

    this.traversePostOrder(node.left);

    this.traversePostOrder(node.right);

    console.log(node.item);
  }

  traversePreOrder(node) {
    if (node === null) return;

    console.log(node.item);

    this.traversePreOrder(node.left);

    this.traversePreOrder(node.right);
  }
}

let root = new BT(0);
root.left = new BT(3);
root.right = new BT(5);
root.right.left = new BT(56);
root.right.right = new BT(6);

root.traversePreOrder(root);
root.traverseInOrder(root);
root.traversePostOrder(root);