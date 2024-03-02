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
		let linkedList = [];
		let currentNode = this.head;

		while (currentNode) {
			linkedList.push(currentNode.value);

			currentNode = currentNode.next;
		}

		console.log(linkedList);
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

	reverse() {
		if (this.length <= 1) return this.head;

		let first = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;

		return this;
	}
}

const myLinkedList = new DoublyLinkedList(20);

myLinkedList.append(30);
myLinkedList.append(40);

myLinkedList.prepend(10);

// const foundNode = myLinkedList.lookup(3);
// // console.log(foundNode);

// myLinkedList.insert(1, 99);

myLinkedList.printList();

myLinkedList.reverse();

myLinkedList.printList();

// myLinkedList.delete(1);
