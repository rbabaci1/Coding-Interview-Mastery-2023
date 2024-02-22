function maxSubArray(nums) {
	// brute force solution
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		let tempMax = 0;

		for (let j = i; j < nums.length; j++) {
			if (tempMax > tempMax + nums[j]) break;
			tempMax += nums[j];
		}

		if (tempMax > max) {
			max = tempMax;
		}
	}

	return max;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const output = maxSubArray(nums);

console.log(output);

/* 
    Example 1:

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/
