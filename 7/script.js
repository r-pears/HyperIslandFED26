//Solution for Reverse String Function
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 010101
 */

//Object Destructuring
const { name, info: { age } } = person;

//Array Destructuring
const [first, second, ...rest] = thisArray;

//Palindrome Check Function
function isPalindrome(str) {
  // Remove whitespaces and convert to lowercase
  str = str.replace(/\s/g, '').toLowerCase();
  
  // Compare string with its reverse
  return str === str.split('').reverse().join('');
}

//Function Test Examples
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseNumber(12345));    // Output: 54321
console.log(isPalindrome("madam"));   // Output: true
