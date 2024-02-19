/*
    in a 32 bits system
    4*4 = 16 bytes of storage
*/
const strings = ["a", "b", "c", "d"];
//                0    1    2    3

console.log(strings[2]);

// add one item
strings.push("e"); // O(1)

// remove one item
strings.pop; // O(1)

// add one item at the beginning of the array
strings.unshift("x"); // O(n)

// add or delete at position
strings.splice(2, 0, "between-a&c"); // O(n)

console.log(strings);
