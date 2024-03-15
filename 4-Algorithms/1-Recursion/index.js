function findFactorialIterative(num) {
	let total = 1;

	while (num > 1) {
		total *= num;
		num--;
	}

	return "Iterative: " + total;
}

function findFactorialRecursive(num) {
	if (num === 1) return num;

	return findFactorialRecursive(num - 1) * num;
}

console.log(findFactorialIterative(5)); // 120

console.log("Factorial: " + findFactorialRecursive(5)); // 120
