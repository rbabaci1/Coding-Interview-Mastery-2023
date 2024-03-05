class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	print() {
		let currentNode = this.top;
		const stack = [];

		while (currentNode) {
			stack.push(`${currentNode.value} |next|-> ${currentNode.next?.value}`);
			currentNode = currentNode.next;
		}

		console.log(stack);
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}

		this.length++;
	}

	pop() {
		if (this.isEmpty()) return null;
		if (this.length === 1) this.bottom = null;

		const poppedValue = this.top;
		this.top = this.top.next;
		this.length--;

		return poppedValue;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Facebook");
myStack.push("Airbnb");

const poppedNode = myStack.pop();

console.log(`${poppedNode.value} got popped!`);

// myStack.print();
console.log(myStack);
