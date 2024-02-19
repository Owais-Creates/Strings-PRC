// Q1 - Write a function that takes a string as input and returns the string reversed. For example, if the input is "hello", the output should be "olleh".

// let ques1String = prompt("Enter the String");

// const reversedString = (str) => {
//   let reversed = "";
//   for ( i = ques1String.length-1 ; i<=0 ; i++ ){

//     reversed += ques1String[i]

//   }
//   return reversed
// }

// console.log(reversedString)

// ---------------------------------------------------------------------------------------------------

// Q2 - Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. For example, "radar" is a palindrome, but "hello" is not.

let ques2String = prompt("Enter the string");
let ques2StringInput = ques2String.toLowerCase();

const isPalindrome = (str) => {

    let normalString = ""
    let reversedString = ""

    for (let i = 0; i < str.length; i++) {

        normalString += str[i];
        reversedString += str[str.length - 1 - i]
    }

    if (normalString == reversedString) {
        console.log(`${str} is palindrome`)
    } else {
        console.log(`${str} is not palindrome`)
    }

}

isPalindrome(ques2StringInput);

// ---------------------------------------------------------------------------------------------------

// Q3 - Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. For example, if the input is "hello", the output should be 2.

let ques3String = prompt("Enter the String");
let ques3StringInput = ques3String.toLowerCase();

const numberOfVowels = (str) => {
let count = 0;
    
for ( i = 0 ; i<str.length; i++ ){

    if ( str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ) {

        count ++ 
    }
}
return count

}

console.log("Number of vowels" + " " + numberOfVowels(ques3StringInput));

// ---------------------------------------------------------------------------------------------------

