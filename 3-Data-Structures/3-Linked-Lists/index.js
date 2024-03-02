class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(initialValue) {
		this.head = {
			value: initialValue,
			next: null,
			prev: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	printList() {
		let linkedListStr = "HEAD -> ";
		let currentNode = this.head;

		while (currentNode) {
			linkedListStr += `{ value: ${currentNode.value}, next: `;
			if (currentNode.next) {
				linkedListStr += `${currentNode.next.value}, prev: ${
					currentNode.prev ? currentNode.prev.value : null
				} } -> `;
			} else {
				linkedListStr += "null, prev: ";
				linkedListStr += currentNode.prev ? currentNode.prev.value : null;
				linkedListStr += " } -> ";
			}

			currentNode = currentNode.next;
		}

		linkedListStr += "TAIL";

		console.log(linkedListStr);
	}

	append(value) {
		const newNode = new Node(value);

		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head.prev = newNode;
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
			this.head.prev = newNode;
			this.head = newNode;
		} else {
			const currentIndexNode = this.lookup(index);
			newNode.next = currentIndexNode;
			newNode.prev = currentIndexNode.prev;
			currentIndexNode.prev.next = newNode;
			currentIndexNode.prev = newNode;
		}

		if (index === this.length) this.tail = newNode; // Update tail if appended

		this.length++;
		return this;
	}

	delete(index) {
		if (index >= this.length || index < 0) return "Index out of bound";

		if (index === 0) {
			this.head = this.head.next;
			this.head.prev = null;
			if (index === this.length - 1) this.tail = null; // If only one done was present
		} else if (index === this.length - 1) {
			// Update tail if last node got deleted
			this.tail = this.tail.prev;
			this.tail.next = null;
		} else {
			const currentIndexNode = this.lookup(index);
			currentIndexNode.prev.next = currentIndexNode.next;
			currentIndexNode.next.prev = currentIndexNode.prev;
		}

		this.length--;
		return this;
	}
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(20);

myLinkedList.prepend(5);

// const foundNode = myLinkedList.lookup(3);
// // console.log(foundNode);

myLinkedList.insert(1, 99);

myLinkedList.printList();

myLinkedList.delete(1);

myLinkedList.printList();
