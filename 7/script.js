/**
 * TODO write a JavaScript function that takes a string and returns it in revserse order.
 * DO NOT use the built-in reverse() method.
 * Should return the reversed string.
 * For example:
 *   reverseString("hello") should return "olleh"
 *   reverseString("world") should return "dlrow"
 *   reverseString("12345") should return "54321"
 */
function reverseString(string) {
	let newstring = "";
	for (let i = 1; i < string.length + 1; i++) {
		newstring += string[string.length - i];
	}
	return newstring;
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("12345"));

/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 10101
 */

function reverseNumber(number) {
	let stringedNumber = number.toString();
	let newNumber = "";
	for (let i = 1; i < stringedNumber.length + 1; i++) {
		newNumber += stringedNumber[stringedNumber.length - i];
	}
	return Number(newNumber);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(98765));
console.log(reverseNumber(101010));

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

const {name, info:{age}} = person

console.log(name, age)

/**
 * TODO destruct the following array the first and second element, and the remaining elements in a third string.
 */

const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];

const [apple, banana, ...rest] = thisArray

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