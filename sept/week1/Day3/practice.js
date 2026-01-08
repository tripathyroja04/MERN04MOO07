//1.write a program to count the number of vowels in a given string.
let Str1 = "This is a sample string to count vowels";
let vowelsCount = 0;
let vowels = "aeiouAEIOU";
for (let char of Str1) {
    if (vowels.includes(char)) {
        vowelsCount++;
    }
}
console.log(`Number of vowels in the given string: ${vowelsCount}`);

//2.reverwse a string without using inbuilt reverse methods
let originalStr = "Hello World";
let reversedStr = "";   
// for (let char of originalStr) {
//     reversedStr = char + reversedStr;
// }

for (let i = originalStr.length - 1; i >= 0; i--) {
    reversedStr += originalStr[i];
}
console.log(`Reversed string: ${reversedStr}`);

//3.check if a given string is a palindrome
let palinStr = "madam";
let isPalindrome = true;
let len = palinStr.length;  
for (let i = 0; i < len / 2; i++) {
    if (palinStr[i] !== palinStr[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log(`${palinStr} is a palindrome`);
} else {
    console.log(`${palinStr} is not a palindrome`);
}

//4.convert the first letter of each word in a sentence to uppercase 
let sentence = "hello world from javascript";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}   
let capitalizedSentence = words.join(" ");
console.log(`Capitalized Sentence: ${capitalizedSentence}`);

//5.count how  many times a specific word appears in a string
let text = "This is a test. This test is only a test.";
let searchWord = "test";
let count = 0;
let textWords = text.toLowerCase().split(/\W+/);
for (let word of textWords) {
    if (word === searchWord.toLowerCase()) {
        count++;
    }
}
console.log(`The word "${searchWord}" appears ${count} times in the given string.`);

//6.replace all spaces in a string with -
let stringWithSpaces = "This is a string with spaces";
let stringWithDashes = "";
for (let char of stringWithSpaces) {
    if (char === " ") {
        stringWithDashes += "-";
    } else {
        stringWithDashes += char;
    }
}
console.log(`String with dashes: ${stringWithDashes}`);

//7.extract first 5 chsraracters from a string
let Str7 = "JavaScript is fun";
let firstFiveChars = "";
// for (let i = 0; i < 5 && i < Str7.length; i++) {
//     firstFiveChars += Str7[i];
// }
firstFiveChars = Str7.slice(0, 5);

console.log(`First 5 characters: ${firstFiveChars}`);

//concate

//15.convert a string "hello" intto "h-e-l-l-o"
let str15 = "hello";
let hyphenatedStr = ""; 
for (let i = 0; i < str15.length; i++) {
    hyphenatedStr += str15[i];
    if (i < str15.length - 1) {
        hyphenatedStr += "-";
    }
}
console.log(`Hyphenated string: ${hyphenatedStr}`);

//10.replacce all occurrences of "java" with "python" in "I love Java Java"
let str10 = "I love Java Java";
let replacedStr = "";
let i = 0;
// while (i < str10.length) {
//     if (str10.slice(i, i + 4).toLowerCase() === "java") {
//         replacedStr += "Python";
//         i += 4;
//     } else {
//         replacedStr += str10[i];
//         i++;
//     }
// }

replacedStr = str10.replaceAll("Java", "Python").replaceAll("java", "Python");

console.log(`Replaced string: ${replacedStr}`);