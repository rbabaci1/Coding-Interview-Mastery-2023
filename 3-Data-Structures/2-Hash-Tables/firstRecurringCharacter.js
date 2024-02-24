function firstRecurringCharacter(input) {
	let dict = {};
	for (let i = 0; i < input.length; i++) {
		if (dict[input[i]]) {
			return input[i];
		}
		dict[input[i]] = 1;
	}
}

//Google Question
/* Given an array */ const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

/* Given an array */ const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//It should return 1

//Given an array = [2,3,4,5]:
/* Given an array */ const array3 = [2, 3, 4, 5];
//It should return undefined

const res = firstRecurringCharacter(array3);

console.log(res);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
