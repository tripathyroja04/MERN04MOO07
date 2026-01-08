console.log ("Today we are learning about Strings methods");
let str = "Hello"
console.log(str[0]);

//methods
//to get indexing value
console.log(str.at(0));
console.log(str.charAt(1));

//string interpolation
let animal = "Cat"
console.log(`My favorite animal is:${animal}`); //place holder concept

//concatination
console.log ("Hello" + 30);
console.log ("Hello". concat(" World"));

let str1="  Qli th   ";
console.log(str1.length);
console.log(str1.trim().length); //removes spaces
console.log(str1.trimStart().length); //removes spaces from start
console.log(str1.trimEnd().length); //removes spaces from end
console.log(str1.trim());
console.log(str1);

//more on template literals 
let greet = "Good Morning"
let name = "Puja"
console.log(greet + " " + name);
console.log(`${greet} ${name}`);

//replace method
let str2="MERN";
console.log(str2.replace("M","m"));

let desc="This is my cat. His name is Tom. My cat is very cute.";
console.log(desc.replace("cat","dog")); //replaces only first occurrence
console.log(desc.replaceAll("cat","dog")); //replaces all occurrence

let num=20;
console.log(num);
console.log (typeof typeof num) //type casting number to string
console.log(num.toString()) //type casting number to string
console.log(typeof num.toString())

//slice method
let string="This is Qlith office";
console.log(string.slice(2)); //start index , end index-1
console.log(string.slice(2,7)); //start index , end index-1
console.log(string.slice(4,2)); //always starting index is less than ending index
console.log(string.slice(4,4)); //backward not possible gives empty string
console.log(string.slice(5,6)); //single character extraction
console.log(string.slice(-2)); //negative indexing
console.log(string.slice(-4,-2)); //negative indexing

//split method
let strArr=string.split("i"); //splitting based on space
console.log(strArr);
console.log(strArr.length);
 