/*
    in a 32 bits system
    4*4 = 16 bytes of storage
*/
const strings = ["a", "b", "c", "d"];
//                0    1    2    3

// console.log(strings[2]);

// add one item
strings.push("e"); // O(1)

// remove one item
strings.pop; // O(1)

// add one item at the beginning of the array
strings.unshift("x"); // O(n)

// add or delete at position
strings.splice(2, 0, "between-a&c"); // O(n)

// console.log(strings);

// Creating an array in JavaScript
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length++] = item;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;

		return { [this.length]: lastItem };
	}

	delete(index) {
		this.shiftItems(index);
		this.pop();
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
	}
}

const newArray = new MyArray();

newArray.push("rabah");
newArray.push("omar");
newArray.push("babaci");

// const returned = newArray.pop();
// console.log({ returned });

newArray.delete(1);

console.log(newArray);
