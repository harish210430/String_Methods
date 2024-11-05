/*
Write in your own way of understanding (don't copy paste)

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.
Example:
*/

// 1. charAt

// Parameter: (index) defaults to 0 - (number data type)
// Return: character at specific index in the string (string data type)

// Example:
let name = 'Arya Stark';
name.charAt(2); //"y"
let sentance = 'A quick brown fox jumped over a lazy dog';
sentance.charAt(4); // "i"
let houseName = 'Starks';
houseName.charAt(0); // "S"
// Explanation: charAt accepts a index (number data type) and return the character on that index in the string.

// 2. toUpperCase
// Parameter: No parameter passed
// Return: it return the string (variable) into UpperCase string.

// Example:
let str1 = "time is money, so don't waste it.";
console.log(str1.toUpperCase());
let ironMan = "Tony Stark is ironman.";
ironMan.toUpperCase();
let title = "games of throne";
title.toUpperCase();

// Explanation: it converts the current string (string data type) into new Upper String.

// 3. toLowerCase
// Parameter: Not Accepted any parameter.
// return: it return string in LowerCase.

// Exp:
let str2 = str1.toUpperCase();
console.log(str2);
str2.toLowerCase();
let ironMan1 =  ironMan.toUpperCase();
console.log(ironMan1.toLowerCase());
let title1 = title.toUpperCase();
console.log(title1);
console.log(title1.toLowerCase());

// Explanation:  

// trim
// trimEnd
// trimStart
// concat
// endsWith
// includes
// indexOf
// lastIndexOf
// padEnd
// padStart
// repeat
// replace
// slice
// split
// substring