const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[i]) {
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	}

	return array;
}

bubbleSort(numbers);
console.log(numbers);
