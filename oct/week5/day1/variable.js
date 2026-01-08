console.log("Welcome to variale second class");

var a;
console.log(a);

var a;
console.log(a);

// only initialization
a = 10;
console.log(a);

//only initialization is possible

var b = 20;
console.log(b);

//both declaration and initialization is possible

var b;
console.log(b);

var b= 30;
console.log(b);

//redeclaration and reintialization is possible

//let keyword

//only declaration is possible

let name;
console.log(name);

fullname = "ROJALIN";
console.log(fullname); //only initialization is possible

//both declaration and initialization is possible

let abc=20;
console.log(abc);

//let fullname = "ROJALIN"; //redeclaration is not possible

//const keyword

//only declaration is not possible

//const age; //error
//console.log(age);


//only initialization is also not possible

//age = 25; //error
//console.log(age);

//both declaration and initialization is possible

const age = 25;
console.log(age);

//const age = 30; //only redeclaration and reinitialization is not possible


//{
    let email = "abc@gmail.com";

//}

//console.log(email);
//let email = "bbb@gmail.com";
//console.log(email);

//primitive data types

let city = "Bangalore"; 
console.log(city)//string
let pin = 560068;
console.log(pin) //number
let isLoggedIn = false; 
console.log(isLoggedIn)//boolean
let state;
console.log(state) //undefined
let salary = null;
console.log(salary) //null

let mobile = BigInt(9876543210123456789);
console.log(mobile) //bigint

let symbol = Symbol("id");
console.log(symbol) //symbol

console.log(typeof city);
console.log(typeof pin);
console.log(typeof isLoggedIn);             
console.log(typeof state);
console.log(typeof salary);
console.log(typeof mobile);
console.log(typeof symbol);       


//non-primitive data types

let fruits = ["apple", "banana", "grapes"];
console.log(fruits);
console.log(fruits[1]);
console.log(typeof fruits); //object        

let person = {
    name: "Rojalin",
    age: 25, 
    city: "Khordha"
};
console.log(person);
console.log(person.age);
console.log(typeof person); //object
//type of storage mechanism is key-value pair


//array

let arr=[1,2,3,4,5];
console.log(arr);
console.log(typeof arr); //object
//type of storage mechanism is index based 

