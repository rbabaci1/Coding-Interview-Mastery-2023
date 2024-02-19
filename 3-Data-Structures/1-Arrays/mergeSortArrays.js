function mergeSortArrays(arr1, arr2) {
	if (arr1.length === 0) return arr1;
	if (arr2.length === 0) return arr2;

	let mergedArray = [];
	let arr1Pointer = 0;
	let arr2Pointer = 0;

	while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
		if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
			mergedArray.push(arr1[arr1Pointer]);
			arr1Pointer++;
		} else {
			mergedArray.push(arr2[arr2Pointer]);
			arr2Pointer++;
		}
	}

	if (arr1Pointer < arr1.length) {
		mergedArray = [...mergedArray, ...arr1.slice(arr1Pointer)];
	} else if (arr2Pointer < arr2.length) {
		mergedArray = [...mergedArray, ...arr2.slice(arr2Pointer)];
	}

	return mergedArray;
}

const arr1 = [0, 3, 31];
const arr2 = [2, 4, 6, 30];

const mergeSortedArray = mergeSortArrays(arr1, arr2);
/* 
    Expected output: [0, 3, 4, 4, 6, 30, 31]
*/

console.log(mergeSortedArray);
