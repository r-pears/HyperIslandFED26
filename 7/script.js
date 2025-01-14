/**
 * TODO write a JavaScript function that takes a string and returns it in revserse order.
 * DO NOT use the built-in reverse() method.
 * Should return the reversed string.
 * For example:
 *   reverseString("hello") should return "olleh"
 *   reverseString("world") should return "dlrow"
 *   reverseString("12345") should return "54321"
 */
function reverseString(str) {
let revers = "";
for(let i = str.length-1; i >= 0; i--){
  revers += str[i];
}
return revers;
}

console.log(reverseString("Hello"))
/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 10101
 */

function reverseNumber(number) {
let revNumber = 0
while(number > 0){
  revNumber = revNumber * 10 + number % 10;
  number = Math.floor(number / 10);
}
return revNumber;
}
console.log(reverseNumber(12345))
//OR
function reverseFunction(num) {
  let numStr = num.toString();
  let revStr = '';
  for (let i = numStr.length - 1; i >= 0; i--) {
      revStr += numStr[i];
  }
  return parseInt(revStr);
};
console.log(reverseFunction(12345))
/**
 * TODO destruct the following object to get name and age.
 */
const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};
const name = person.name;
const age = person.info.age;
console.log(name, age)

/**
 * TODO destruct the following array the first and second element, and the remaining elements in a third variable.
 */

const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];

const [first, second, ...rest] = thisArray;
console.log(first)
console.log(second)
console.log(rest)
/**
 * !!!!OPTIONAL!!!!
 * TODO Write a JavaScript function that checks if a string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads * the same forward and backward. For example, "madam" is a palindrome.
 * The function should return true if the string is a palindrome and false if it is not.
 * For example:
 *    isPalindrome("madam") should return true
 *    isPalindrome("hello") should return false
 *    isPalindrome("12321") should return true
 *    isPalindrome("race car") should return true
 *    isPalindrome("coding") should return false
 */

function isPalindrome(str) {
  const fixedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const revStr = fixedStr.split('').reverse().join('');
  return fixedStr === revStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("coding")); // false