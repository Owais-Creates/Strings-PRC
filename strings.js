// Q1 - Write a function that takes a string as input and returns the string reversed. For example, if the input is "hello", the output should be "olleh".

// let ques1String = prompt("Enter the String");

// const reversedString = (str) => {
//   let reversed = "";
//   for ( i = str.length-1 ; i>=0 ; i-- ){

//     reversed += str[i]

//   }
//   return reversed
// }

// console.log(reversedString(ques1String))

// ---------------------------------------------------------------------------------------------------

// Q2 - Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. For example, "radar" is a palindrome, but "hello" is not.

// let ques2String = prompt("Enter the string");
// let ques2StringInput = ques2String.toLowerCase();

// const isPalindrome = (str) => {

//     let normalString = ""
//     let reversedString = ""

//     for (let i = 0; i < str.length; i++) {

//         normalString += str[i];
//         reversedString += str[str.length - 1 - i]
//     }

//     if (normalString == reversedString) {
//         console.log(`${str} is palindrome`)
//     } else {
//         console.log(`${str} is not palindrome`)
//     }

// }

// isPalindrome(ques2StringInput);

// ---------------------------------------------------------------------------------------------------

// Q3 - Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. For example, if the input is "hello", the output should be 2.

// let ques3String = prompt("Enter the String");
// let ques3StringInput = ques3String.toLowerCase();

// const numberOfVowels = (str) => {
// let count = 0;

// for ( i = 0 ; i<str.length; i++ ){

//     if ( str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ) {

//         count ++ 
//     }
// }
// return count

// }

// console.log("Number of vowels" + " " + numberOfVowels(ques3StringInput));

// ---------------------------------------------------------------------------------------------------

// Q-4 Write a function that takes a sentence (string) as input and returns the same sentence with the first letter of each word capitalized. For example, if the input is "hello world", the output should be "Hello World".

// let ques4String = prompt("Enter the string here");

// const upperCase = (str) => {
//     let finalResult = ""

//     finalResult += str[0].toUpperCase();

//     for (i = 1; i < str.length; i++) {

//         if (str[i] == " ") {

//             if (i + 1 < str.length) {

//                 finalResult += ' ' + str[i + 1].toUpperCase();
//                 i++;
//             }
//         }

//         else {
//             finalResult += str[i]
//         }

//     }


//     return finalResult


// }

// console.log(upperCase(ques4String));

//---------------------------------------------------------------------------------------------------

// Q5 - Write a function that takes two strings as input and returns true if they are anagrams of each other (contain the same characters in a different order), and false otherwise. For example, "listen" and "silent" are anagrams.

// let ques5String = prompt("Enter the first string").trim();
// let ques5StringInput = ques5String.toLowerCase();

// let ques5StringTwo = prompt("Enter the second string").trim();
// let ques5StringTwoInput = ques5StringTwo.toLowerCase();

// const isAnagram = (str1, str2) => {

//     // Here we will store the occurence of the characters of str1 and then compare it with str2 (ofc the values).
//     let occuranceObj = {}

//     // Length check
//     if (str1.length != str2.length) {

//         return "length is not same, Please enter the strings with the same length";

//     }

//     // MAP created for the first string.
//     // value of the key was coming undefined hence the OR operator logic.
//     for (i = 0; i < str1.length; i++) {
//         occuranceObj[str1[i]] = (occuranceObj[str1[i]] || 0) + 1

//     }

//     // If the charac of str2 is same as str1 then we decrement the value by 1 , and if the value of all characters is 0 after the loop then it is a anagram.

//     for (j = 0; j < str2.length; j++) {

//         if (!occuranceObj[str2[j]]) {
//             return false
//         }

//         occuranceObj[str2[j]] -= 1;

//     }

//     return true;


// }

// console.log(isAnagram(ques5StringInput, ques5StringTwoInput));

//---------------------------------------------------------------------------------------------------

// Q6 - Write a function that takes a string as input and returns the string with duplicate characters removed. For example, if the input is "hello", the output should be "helo".

// let ques6String = prompt("Enter the string");
// let ques6StringInput = ques6String.toLowerCase();

// const removeOccuringCharacter = (str) => {
//     let obj = {}
//     let result = "";

//     for (i = 0; i < str.length; i++) {
//         obj[str[i]] = (obj[str[i]] || 0) + 1;
//     }

//     for (let j = 0; j < str.length; j++) {
//         if (obj[str[j]] > 1) {
//             obj[str[j]] -= 1;
//         } else {
//             result += str[j];
//         }
//     }

//     return result

// }

// console.log(removeOccuringCharacter(ques6StringInput));

//---------------------------------------------------------------------------------------------------

// Q7 - Write a function that takes a sentence (string) as input and returns the longest word in the sentence. For example, if the input is "The quick brown fox jumped over the lazy dog", the output should be "jumped".

// let ques7String = prompt("Enter the string here");
// let ques7SplitString = ques7String.split(" ");

// const longestWord = (str) => {

//     let result = str[0]

//     for (i = 1; i < str.length; i++) {

//         if (str[i].length > result.length) {
//             result = str[i]
//         }

//     }


//     return result;

// }

// console.log(longestWord(ques7SplitString));

//---------------------------------------------------------------------------------------------------
 
// HW zWrite a function which  will take two strings as input and returns boolean value indicating whether one string is an permutation of other.

// Q8 - Write a function that takes a sentence (string) as input and returns the same sentence with each word capitalized, except for certain words (e.g., "and", "the", "of"), which should remain lowercase. For example, if the input is "the quick brown fox", the output should be "The Quick Brown Fox".

// let ques8string = prompt("Enter the string");
// let ques8stringInput = ques8string.toLowerCase();
// let ques8split = ques8stringInput.split(" ");

// const titleCase = (str) => {
//     let result = "";

//     for (i = 0; i < str.length; i++) {
//         let word = str[i];
//         if (word !== "the" && word !== "and" && word !== "or" && word !== "is") {
//             result += " " +  word.charAt(0).toUpperCase() + word.slice(1)
//         } else {
//             result += " " + word
//         }
//     }

//     result=result.trim()
//     return result

// }

// console.log(titleCase(ques8split));

