function firstRecurringCharacter(nums) {
	let dict = {};
	for (let i = 0; i < nums.length; i++) {
		if (dict[nums[i]]) {
			return nums[i];
		}
		dict[nums[i]] = 1;
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

//Bonus... What if we had this:
const array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
// return 5 because the pairs are before 2,2

const res = firstRecurringCharacter(array4);

console.log(res);
