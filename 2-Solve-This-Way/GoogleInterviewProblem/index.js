// Using the interview cheat sheet taking the famoust google interview as an example

function hasPairWithSum(nums, sum) {
	let prev = new Set([]);

	for (let i = 0; i < nums.length; i++) {
		let diff = sum - nums[i];

		if (prev.has(diff)) {
			console.log("Found");
			return;
		}

		prev.add(nums[i]);
	}

	console.log("Not found");
}

const collection1 = [1, 2, 3, 9];
const collection2 = [1, 2, 4, 4];
const sum = 8;

hasPairWithSum(collection1, sum);
