function findFactorialIterative(num) {
	let total = 1;

	while (num > 1) {
		total *= num;
		num--;
	}

	return "Iterative: " + total;
}

function findFactorialRecursive(num) {
	if (num === 2) return num;

	return findFactorialRecursive(num - 1) * num;
}

// console.log(findFactorialIterative(5)); // 120

// console.log("Factorial: " + findFactorialRecursive(5)); // 120

function fibIterative(n) {
	// n = 5 -->  0, 1, 1, 2, 3, 5, 8, 13, 21
	let a = 0;
	let b = 1;
	let result = 0;
	while (n >= 2) {
		result = a + b;
		a = b;
		b = result;
		n--;
	}

	return result;
}

function fibRecursive(n) {
	if (n < 2) return n;

	return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// console.log(fibIterative(40));
// console.log(fibRecursive(40));
