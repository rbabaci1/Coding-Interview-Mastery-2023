function firstRecurringCharacter(nums) {
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] !== undefined) {
			return nums[i];
		}
		map[nums[i]] = i;
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

const res = firstRecurringCharacter(array1);

console.log(res);
