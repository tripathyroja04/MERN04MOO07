console.log("Welcome to JavaScript Strings class");

// let str1="firsr string";
// let str2='second string';
// let str3=`third string`;
// console.log(typeof str1);
// console.log(str2);
// console.log(str3);

let string = "Hello";
console.log(string);
console.log(string[0]);

let obj = {
    name: "Puja",
    age: 22

}

obj.age = 23;
console.log(obj.age);

//object is mutable means we can change the value
//string is immutable means we cannot change the value

//variable
//object

let stringobj = new String("Hello World");
console.log(stringobj);
console.log(typeof stringobj);

//string variable n methods
//properties: length

console.log(string.length);

//string methods
//1. toUpperCase()
console.log(string.toUpperCase());
//2. toLowerCase()
console.log(string.toLowerCase());
//3. includes()
console.log(string.includes("lo")); //true

//template literals
let nameStr = "name Puja";
console.log(nameStr+ " age 22");

console.log(nameStr,20);
console.log(`${nameStr} age 22`);

