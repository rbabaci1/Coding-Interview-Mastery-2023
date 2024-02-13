// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}



/*
    Solution: O(n).

    Explanation: This function will depend on the input array, which will make     it have a linear time complexity.

    BIG O(3 + 4n) = BIG(n)

    **Won't need to calculate Big O like this in an interview**
 */