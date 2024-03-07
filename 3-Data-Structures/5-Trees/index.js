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

	printTree() {
		if (!this.root) {
			console.log("The tree is empty");
			return;
		}
		let buffer = [];
		this.traversePrint(this.root, "", true, (val) => buffer.push(val));
		console.log("Root");
		console.log(buffer.join(""));
	}

	traversePrint(node, prefix, isLeft, callback) {
		if (node.right !== null) {
			this.traversePrint(
				node.right,
				prefix + (isLeft ? "│   " : "    "),
				false,
				callback
			);
		}
		callback(prefix + (isLeft ? "└── " : "┌── ") + node.value + "\n");
		if (node.left !== null) {
			this.traversePrint(
				node.left,
				prefix + (isLeft ? "    " : "│   "),
				true,
				callback
			);
		}
	}

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	lookup(value) {}
}

const myTree = new BinarySearchTree();

myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);

/* 
        9
    4       20
  1   6   15  170
*/

myTree.printTree();
