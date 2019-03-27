const isPalindrome = (word) => {
    // Handy function to reverse a string.
    // Splits into array, reverses array, and joins it back together.
    const reverseSpelling = (word) => word.split('').reverse().join('');
    
    if(word.constructor === Array) {
      const wordList = word;
      const results = [];
      
      wordList.forEach(item => {
        if(item === reverseSpelling(item)) {
          results.push({[item]: true});
        } else {
          results.push({[item]: false})
        }
      })

      return results;
    } else if(word.constructor === String) {
      return word === reverseSpelling(word) ? true : false;
    } else {
      return 'Sorry... must pass in a string or an array of strings.'
    }
}

console.log(isPalindrome(123));

/*
  CHALLENGE
  ------------

  Write a function which takes a string and checks if it is a palindrome. Extra credit is to take an array of strings and check if they are palindromes. A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, racecar, civic etc.

  IMPROVEMENTS
  ------------
  1. Make web-based with user input or use cmd.
  2. Lowercase all inputs.
  3. Check if array only contains strings.
*/