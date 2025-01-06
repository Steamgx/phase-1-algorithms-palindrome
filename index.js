function isPalindrome(word) {
  // Reverse the word and store it in a variable
  const reversedWord = word.split('').reverse().join('');

  // Compare the original word to the reversed word
  if (word === reversedWord) {
    return true;  // It is a palindrome
  } else {
    return false; // It is not a palindrome
  }
}

/* 
  Pseudocode:
  function isPalindrome(word):
      Reverse the word and store it in a variable
      Compare the original word to the reversed word
      If both are the same:
          Return true (it is a palindrome)
      Else:
          Return false (it is not a palindrome)
*/

/*
  Explanation of the solution:
  - The function reverses the input string and compares it to the original.
  - If the reversed string matches the original, the function returns true, indicating the string is a palindrome.
  - If not, it returns false.
  - The time complexity of this solution is O(n), where n is the length of the string, as we need to iterate through the string multiple times (for splitting, reversing, and joining).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

