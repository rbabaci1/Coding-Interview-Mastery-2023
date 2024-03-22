let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
	let swappOccured;

	do {
		swappOccured = false;

		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
				swappOccured = true;
			}
		}
	} while (swappOccured);
}

// bubbleSort(numbers);

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let smallestIndex = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[smallestIndex] > array[j]) smallestIndex = j;
		}

		if (smallestIndex !== i) {
			[array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
		}
	}
}

// selectionSort(numbers);

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let end = i - 1;
		let current = i;

		while (end >= 0) {
			if (array[current] < array[end]) {
				[array[current], array[end]] = [array[end], array[current]];
				current--;
			} else break;

			end--;
		}
	}
}

insertionSort(numbers);

console.log(numbers);
