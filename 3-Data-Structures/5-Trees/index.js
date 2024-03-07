class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {}

	lookup(value) {}
}

const myTree = new BinarySearchTree();

myTree.insert(9);
myTree.insert(4);
// myTree.insert(6);
// myTree.insert(20);
// myTree.insert(170);
// myTree.insert(15);
// myTree.insert(1);

/* 
        9
    4       20
  1   6   15  170
*/

console.log(myTree);
