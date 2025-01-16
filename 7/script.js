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
  let stringReverse = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
  }
  return stringReverse;
}

console.log(reverseString("hello"))
console.log(reverseString("12345"))



/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 10101
 */

function reverseNumber(number) {
  const numberNumber = number.toString()
  let numberReverse = "";

  for (let i = numberNumber.length - 1; i >= 0; i--) {
    numberReverse += numberNumber[i];
  }
  return numberReverse;
}

console.log(reverseNumber(54321))

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

function destructPerson() {
  let personDestruct = "name: " + person.name + ", " + "age: " + person.info.age;

  return personDestruct;
}

console.log(destructPerson())


/**
 * TODO destruct the following array the first and second element, and the remaining elements in a third variable.
 */

const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];

const [first, second, ...rest] = thisArray;

console.log(first, second, rest)

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

function isPalindrome(word) {

  word = word.toString();

  let letters = word.split("");

  let reversedLetters = letters.reverse();

  let reversedWord = reversedLetters.join("");

  if (word.toLowerCase() == reversedWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("dragon"))
console.log(isPalindrome("mom"))
