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
		let current = array[i]; // Store the current element
		let end = i - 1; // Start comparing with the element before i

		// Shift elements of the sorted segment forward if they are larger than the current element
		while (end >= 0 && array[end] > current) {
			array[end + 1] = array[end];
			end--;
		}
		// Insert the current element into its correct position
		array[end + 1] = current;
	}
}

// insertionSort(numbers);

function merge(left, right) {
	const mergedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Check if merging is needed
	if (left[left.length - 1] <= right[0]) {
		console.log("already sorted");
		return [...left, ...right];
	}

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			mergedArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			mergedArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// Handle any remaining elements in left or right array
	if (leftIndex < left.length) {
		mergedArray.push(...left.slice(leftIndex));
	} else if (rightIndex < right.length) {
		mergedArray.push(...right.slice(rightIndex));
	}

	return mergedArray;
}

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));

// console.log(numbers);
