// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

// For example:
/*
    const array1 = ['a', 'b', 'c', 'x']
    const array2 = ['z', 'y', 'i']
    ** SHOULD RETURN FALSE **
    -----------------------------------
    const array1 = ['a', 'b', 'c', 'x']
    const array2 = ['z', 'y', 'x']
      ** SHOULD RETURN TRUE **
*/

// Brute force solution
/*
    Iterate over the first array and take each sinle item and check 
    if it exists in the second array by doing a second nested iteration over the second array. This would have the time complexity of O(arr1 * arr2).
*/
function bruteForceSolution(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				console.log("FOUND!");
				return;
			}
		}
	}

	console.log("NOT FOUND!");
}

// Better solution
/*
    Iterate over the first array and store each value in an object as a key. Then iterate over the second array and check if any of its values exist in the object, if so, common item exists! This would have a better time complexity of O(arr1 + arr2).
*/
function containsCommonItem(arr1, arr2) {
	let pairs = {};

	for (let i = 0; i < arr1.length; i++) {
		pairs[arr1[i]] = i;
	}

	for (let j = 0; j < arr2.length; j++) {
		if (pairs[arr2[j]]) {
			console.log("FOUND!!!");
			return;
		}
	}

	console.log("NOT FOUND!!!");
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "i", "i"];

// bruteForceSolution(array1, array2);
containsCommonItem(array1, array2);
