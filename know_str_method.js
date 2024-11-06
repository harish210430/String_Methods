// What is a Method? "Function inside an object, is known as methods".
// How is it different from a function? "Whenever we access a function with .(Dot) on premitive or Non- premitive values, is a method. "
// Using method on Premitive values like: String and Number.

// function
function add(a, b) {
    return a + b;
}
add(3, 4);

// Method
let operation = {
    sum: add,
};
// access after . is a Method.
operation.sum(9, 2); // 11 

// Using method on Premitive values:  
// when u add . (dot) operator after string/number then a Repo. gets created (Repo means access a bag that contains diff. methods.)
let str = "Jurassic Park";
str.toUpperCase();
console.log(str.split(" "));

let number = 231.0113926;
console.log(number.toFixed(3));



// Some Basic String Methods:
const username = "AltCampus";
const tagline = " Everything you need to become a software developer.";

// 1. charAt(index):
console.log(username.charAt()); // A
console.log(username.charAt(5)); // m

// 2. toUpperCase, toLowerCase:
console.log(username.toUpperCase()); // 'ALTCAMPUS'
console.log("username".toUpperCase()); // 'USERNAME'

console.log(username.toLowerCase()); // 'altcampus'
console.log("UserName".toLowerCase()); // 'username'

// 3. trim, trimEnd, trimStart:
let message = "  Kala Kauaa Kat khayega     ";
console.log(message.trim());
console.log("message  ".trim());

console.log(message.trimEnd());
console.log(" message!  ".trimEnd());

console.log(message.trimStart());

// 4. concat(string);
console.log(username.concat(tagline));
console.log(username.concat( " is" ,tagline));

// 5. endsWith("string"), startsWith("char"), includes("string/char"):
console.log(username.endsWith("s")); // true
console.log(username.endsWith("")); // true
console.log(username.endsWith("S")); // false

console.log(tagline.startsWith("")); // true
console.log(tagline.startsWith(" ")); // true
console.log(tagline.startsWith("Everything")); // false

console.log(username.includes("C")); // true
console.log(username.includes("Cmp")); // false
console.log(username.includes("Altmp")); // false

// 6. indexOf("char/string"), lastIndexOf(string/char)
console.log(username.indexOf("")); // 0
console.log(username.indexOf(" Kala")); // -1
console.log(tagline.indexOf("become")); // 24

console.log(username.lastIndexOf("m")); // 5
console.log(tagline.lastIndexOf("y")); // 12 (last character("y") ka index)

// padEnd("Endwith char"), padStart(startwith char)
console.log(username.padEnd(11, ".")); // AltCampus..
console.log("user".padEnd(7, "@")); // user........

console.log(tagline.padStart(54, "$"));
console.log("Email".padStart(6, "#")); // #Email

// repeat(Howmany times), replace(two parameters), replaceAll() 
console.log(username.repeat(2)); // AltCampusAltCampus
console.log("Paani".repeat(0)); // 

console.log(tagline.replace("software", "Nothing")); // software -> Nothing
console.log(username.replace("Campus", "School")); // AltSchool

console.log(username.replaceAll( username ,"Kaala Paani")); // Kaala Paani
console.log(tagline.replaceAll("e", "9")); // e -> 9


// slice(st_idx, end_idx), split(split with "char"), subString(st_idx, end_idx)
console.log(tagline.slice(0 , 20)); // Everything you need
console.log(tagline.slice(20, 0)); // Empty String
console.log(tagline.slice(20, NaN)); // Empty String

console.log(tagline.substring(0, 20)); // Everything you need
console.log(tagline.substring(20, 0)); // Everything you need
console.log(tagline.substring(20, NaN)); // Everything you need

console.log(tagline.split(" ")); // converts into an Array Saperated with space

// Used in Array: splice(position, Howmany), join("char" join with):
console.log(tagline.split(" ").join(" "));