import { decrypt, encrypt } from './encrypt-solutions';

/**
 * 1.
 * Make a function to print the first name and last name from an array
 * Input example:   ["Jonas", "Rogers"] 
 * Output example: "Jonas Rogers"
 */

function printFullName(arrayOfNames) {
  // Your code here
  return `${arrayOfNames[0]} ${arrayOfNames[1]}`
}

/**
 * 2.
 * Make a function to print the first name and last name from an array of arrays
 * Input example:  [ ["Jonas", "Rogers"], ["John", "Doe"], ... ]
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function printFullNameFromArrayOfArrays(arrayOfArrays) {
  // Your code here
  return [`${arrayOfArrays[0][0]} ${arrayOfArrays[0][1]}`, `${arrayOfArrays[1][0]} ${arrayOfArrays[1][1]}`]
}

/**
 * 3.
 * Make a function to count character in a string
 * Input example:  "Without functions, we fucked up!"
 * Output example: ["Jonas Rogers", "John Doe", ...]
 */

function countSpecificCharacter(string, character) {
  // Your code here
  let countCharacter = 0
  let stringToArray = string.split('')
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] === character) {

      countCharacter++
    }
  }
  return countCharacter
}

/**
 * 4.
 * Make a function to return random item from array
 * Input example: ["John", "Doe", 3, "Hello world!"]
 * Output example: Random element from the array.
 */

function getRandomItemFromArray(arr) {
  // Your code here
  let randomItem = arr[Math.floor(Math.random() * arr.length)]

  return randomItem
}

/**
 * 5.
 * Make a function to return shuffled array items
 * Input example: [1,2,3,4,5,6,7,8,9]
 * Output example: Shuffled array.
 */

function shuffleMyArray(arr) {
  // Your code here
  let shuffledArray = arr.sort(function () {
    return Math.random() - 0.5
  })
  return shuffledArray
}

/**
 * 6.
 * Reverse a number
 * Input example: 123
 * Output example: 321
 */

function reverseNum(num) {
  // your code here

  let rev = Number(String(num).split('').reverse().join(''))

  return rev


}

/**
 * 6.
 * Count vowel letters
 * Input example: The NEMESIS is Umbrella creation
 * Output example: 12
 */
const vowel = ['a', 'e', 'i', 'o', 'u']

function countVowel(str) {
  // your code here
  let count = 0
  for (let letter of str.toLowerCase()) {
    if (vowel.includes(letter)) {
      count++
    }
  }
  return count
}

/**
 * 7.
 * Check Palindrome
 * Input examples:
 * - bannana
 * - racecar
 * - madam
 * Output examples:
 * - false
 * - true
 * - true
 */

function checkPalindrome(str) {
  // Your code here
  const stringToArray = str.split('')
  const reverseArray = stringToArray.reverse()
  const reverseString = reverseArray.join('')

  if (str === reverseString) {
    return true
  }
  else {
    return false
  }
}



/**
 * 8.
 * Factorial
 * Input examples: 5
 * Output examples: 120
 */

function getFactorial(num) {
  // Your code here
  if (num === 0 || num === 1) return 1
  if (num < 0) return 0

  for (let i = num - 1; i >= 1; i--) {
    num *= i
  }
  return num
}

// Do not touch this line
module.exports = {
  printFullName,
  printFullNameFromArrayOfArrays,
  countSpecificCharacter,
  getRandomItemFromArray,
  shuffleMyArray,
  reverseNum,
  countVowel,
  checkPalindrome,
  getFactorial,
};
