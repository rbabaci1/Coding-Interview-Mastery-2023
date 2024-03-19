const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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

bubbleSort(numbers);
console.log(numbers);
