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
let sentance = 'A quick brown fox jumped over a lazy dog  ';
sentance.charAt(4); // "i"
let houseName = 'Starks';
houseName.charAt(0); // "S"
// Explanation: charAt accepts a index (number data type) and return the character on that index in the string.

// 2. toUpperCase
// Parameter: No parameter passed
// Return: it return the string (variable) into UpperCase string.

// Example:
let str1 = "time is money, so don't waste it .";
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

// Explanation: method to convert the current string to new LowerCase string (string data type).

// 4. trim, trimEnd, trimStart
// Parameter: No Parameter Required
// return: it remove the white spaces from start and from End.

// Exp:
let str4 = "   Honesty is the best Policy. ";
str4.trim(); // "Honesty is the best policy."
str4.trimEnd(); // "   Honesty is the best policy."
str4.trimStart(); // "Honesty is the best policy. "

// Explanation: it removes all the spaces from end and from start as like it's name.

// 5. concat("string"/var_name):
// parameter: takes parameter according to need.
// return: it adds/joins all the strings / str_variables and return.

// Exp:
name.concat(sentance);
"Hello ".concat(name);
name.concat(" is ", sentance);
name.concat(" is ", "Bran's ", "sister");

// Explanation: it takes parameter according to need and joins all the strings and return a new string.

// 6. endsWith, startWith, includes:
// Parameter: takes "string" as a Parameter
// return: true or false based on parameter

// Exp:
name.endsWith("stark"); // false Becoz it's "Stark" not "stark"
sentance.endsWith("dog"); // true

"Pulvama".startsWith("pul"); // flase, Becoz it's "Pul"
sentance.startsWith("A"); // true

sentance.includes("fox"); // true
console.log(sentance.includes("jump")); // true

// Explanation: they all accept "string" as parameter and return true/false based on that.

// 7. indexOf, lastIndexOf:
// Parameter: take "string"/"char" as parameter
// return: they return the index no. of string

// Exp:
name.indexOf("s"); // -1, Becoz 's' is not in name
"Parental".indexOf("t"); // 5

console.log(sentance.lastIndexOf("e")); // 27
console.log("Immunity".lastIndexOf("m"));

// Explanation: they accept "string/char" as parameter and return index of that string/character.

// 8. padEnd, padStart
// Parameter: accepts two parameters (number, "str/char")
// return: return new string with padding(as we gave).

// Exp:
console.log(name.padEnd(13, ".")); // Arya Stark...
console.log("Aladin".padEnd(10, ".chirag")); // Aladin.chi

"Email".padStart(6, "#"); // ##Email
name.padStart(12, "@"); // @@@Arya Stark

// Explanation: accepts two parameters (number, "str/char") and return new string with char_padding.

// 9. repeat, replace, replaceAll
// Parameter(repeat): takes number as parameter
// return: return the string number times

// Exp:
name.repeat(3); // "Arya StarkArya StarkArya Stark"
console.log("Repeatation".repeat(0)); // ""

// Explanation: take number as para, return repeated string no. of times what we given.

// Parameter(replace, replaceAll): takes two para (in strings)
// return: it return after replace  string.

// Exp: 
name.replace("Stark", "Second");
console.log(name.replace("r", "l"));

console.log(name.replaceAll("r", "l")); // Alya Stalk
console.log("grammer".replaceAll("r", "n")); // gnammen

// Explanation: Accept two para ("str1", "str2") and return new modified (replaced) string.


// 10. slice, substring
// Parameter: takes two number as para.
// return: it return a piece of string from string.

// (End number not count)
// Exp:  

console.log(name.slice(2, 8)); // ya Sta (End number not count)
"Introduction".slice(0, 6); // Introd (End number not count)
console.log(sentance.slice(0, 22)); // A quick brown fox jump (End number not count)
"Instagram".slice(8, 2); // ""

console.log(sentance.substring(0, 22)); // A quick brown fox jump (End number not count)
"Instagram".substring(8, 2); // stagra (End number not count)

// Explanation: Accept two numbers as para And return some peice of string from original string.

// 11. split
// Parameter: takes (Char like: " ", "", "a".. etc) as para
// return: Always return an Array

// Exp:
console.log(name.split("")); // ["Arya", "Stark"]
console.log(sentance.split(" "));
"Due to some reason".split(" "); // ["Due", "to", "some", "reason"]

// 12. join

console.log(name.split("").join("")); // Arya Stark
console.log(name.split("").join()); // A,r,y,a, ,S,t,a,r,k
console.log(name.split("").join(" ")); // A r y a   S t a r k

console.log(sentance.split(" ").join(" ")); // A quick brown fox jumped over a lazy dog  