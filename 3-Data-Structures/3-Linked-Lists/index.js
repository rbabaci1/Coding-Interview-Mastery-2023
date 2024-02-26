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
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(30);

myLinkedList.prepend(5);

console.log(myLinkedList);
