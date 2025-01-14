//Solution for Reverse String Function
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//Solution for Reverse Number Function
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

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
