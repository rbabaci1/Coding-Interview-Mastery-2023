class Stack {
	constructor() {
		this.stack = [];
	}

	print() {
		console.log(thi.stack);
	}

	peek() {
		return this.stack[-1];
	}

	push(value) {
		this.stack.push(value);
	}

	pop() {
		return this.stack.pop();
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Facebook");
myStack.push("Airbnb");

const poppedValue = myStack.pop();

console.log(`${poppedValue} got popped!`);

// myStack.print();
console.log(myStack);
