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
		const newNode = {
			value,
			next: null,
		};

		if (!this.head.next) {
			this.head.next = this.tail;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	delete() {}
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);

console.log(myLinkedList);
