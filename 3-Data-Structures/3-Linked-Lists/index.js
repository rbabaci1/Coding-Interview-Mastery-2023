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
	}

	insert(index, value) {
		if (index === 0) this.prepend(value);
		if (index === this.length - 1) this.append(value);
		if (index >= this.length || index < 0) return "Index out of bound";

		const newNode = new Node(value);
		const prevNode = this.lookup(index - 1);
		const nextNode = this.lookup(index);

		newNode.next = nextNode;
		prevNode.next = newNode;
		this.length++;
		return this;
	}

	delete(index) {}
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(30);

myLinkedList.prepend(5);

const foundNode = myLinkedList.lookup(3);
console.log(foundNode);

myLinkedList.insert(2, 99);

myLinkedList.printList();
