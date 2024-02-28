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
		while (currentNode) {
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

	lookup(index) {
		let currentNode = this.head;
		let currentIndex = 0;

		while (currentNode) {
			if (index === currentIndex) {
				return currentNode;
			}

			currentNode = currentNode.next;
			currentIndex++;
		}

		return null;
	}

	insert(index, value) {
		if (index > this.length || index < 0) return "Index out of bound";

		const newNode = new Node(value);
		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			const prevNode = this.lookup(index - 1);
			newNode.next = prevNode.next;
			prevNode.next = newNode;
		}

		if (index === this.length) this.tail = newNode; // Update tail if appended

		this.length++;
		return this;
	}

	delete(index) {
		if (index >= this.length || index < 0) return "Index out of bound";

		if (index === 0) {
			this.head = this.head.next;
			if (index === this.length - 1) this.tail = null; // If only one done was present
		} else {
			const prevNode = this.lookup(index - 1);
			const nodeToDelete = prevNode.next;
			prevNode.next = nodeToDelete.next;
			if (index === this.length - 1) this.tail = prevNode; // Update tail if last node got deleted
		}

		this.length--;
		return this;
	}
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(30);

myLinkedList.prepend(5);

// const foundNode = myLinkedList.lookup(3);
// // console.log(foundNode);

myLinkedList.insert(4, 99);

myLinkedList.printList();

myLinkedList.delete(4);

myLinkedList.printList();
