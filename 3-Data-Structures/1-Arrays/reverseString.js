function reverseString(str) {
	if (!str || str.length < 2 || typeof str !== "string") {
		return "Input not worth going through ;/";
	}

	let arrayStr = str.split("");
	let end = str.length - 1;

	for (let start = 0; start < end; start++, end--) {
		let temp = arrayStr[start];
		arrayStr[start] = arrayStr[end];
		arrayStr[end] = temp;
	}

	return arrayStr.join("");
}

const reversedString = reverseString("Hi my name is Rabah");
/* 
    Should return: "habaR si eman ym iH"
*/

console.log(reversedString);
