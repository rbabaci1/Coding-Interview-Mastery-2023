function twoSum(nums, target) {
	let vals = {};

	for (let i = 0; i < nums.length; i++) {
		let sumCompelement = target - nums[i];

		if (vals[sumCompelement] !== undefined) {
			return [vals[sumCompelement], i];
		}

		vals[nums[i]] = i;
	}
}

const nums = [2, 7, 11, 15];
const target = 9;

const sum = twoSum(nums, target);
/*
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

console.log(sum);
