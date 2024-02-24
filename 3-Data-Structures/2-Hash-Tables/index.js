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
		const currBucket = this.data[address];

		if (currBucket) {
			for (let i = 0; i < currBucket.length; i++) {
				if (currBucket[i][0] === key) {
					return currBucket[i][1];
				}
			}
		}
	}

	keys() {
		const keys = [];
		for (let i = 0; i < this.data.length; i++) {
			const bucket = this.data[i];
			if (bucket) {
				// in case there was collisons while inserting
				for (let j = 0; j < bucket.length; j++) {
					keys.push(bucket[j][0]);
				}
			}
		}

		return keys;
	}
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.set("apples", 500);
myHashTable.set("oranges", 300);
myHashTable.set("pears", 200);
myHashTable.set("kiwis", 100);

const item = myHashTable.get("grapesss");
// console.log(item);

const keys = myHashTable.keys();
console.log(keys);
