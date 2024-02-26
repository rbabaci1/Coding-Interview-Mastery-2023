class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(initialValue) {
		this.head = {
			value: initialValue,
			next: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	printList() {
		let linkedListStr = "HEAD -> ";
		let currentNode = this.head;
		while (currentNode !== null) {
			// Append current node's details to the string
			linkedListStr += `{ value: ${currentNode.value}, next: `;

			if (currentNode.next) {
				linkedListStr += `${currentNode.next.value} } -> `;
			} else {
				// For the last node, next will be null
				linkedListStr += "null } -> ";
			}

			currentNode = currentNode.next;
		}

		linkedListStr += "TAIL";

		console.log(linkedListStr);
	}

	append(value) {
		const newNode = new Node(value);

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	lookup(index) {}

	insert(index, value) {}

	delete(index) {}
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(30);

myLinkedList.prepend(5);

// console.log(myLinkedList);
myLinkedList.printList();
