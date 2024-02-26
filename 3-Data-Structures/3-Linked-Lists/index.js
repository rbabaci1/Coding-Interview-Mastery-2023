class LinkedList {
	constructor(initialValue) {
		this.head = {
			value: initialValue,
			next: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	insert() {}

	delete() {}
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);
