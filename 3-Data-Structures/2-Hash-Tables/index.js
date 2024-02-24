class HashTable {
	constructor(size = 20) {
		this.data = new Array(size);
		// [['grapes', 1000], ...]
	}

	// devloper standard to tell its like a private method
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}

		this.data[address].push([key, value]);
	}

	get(key) {
		const address = this._hash(key);
		return this.data[address];
	}
}

const myHashTable = new HashTable(1);

myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 10000);
const res = myHashTable.get("grapes");

console.log(res);
