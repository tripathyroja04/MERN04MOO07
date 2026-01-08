console.log ("rest special methods");

//every method

let arr=[1,2,3,4,2,5];
let isGreater=arr.every((v)=>{
 return v>0
})
console.log(isGreater)

//some method
let isgre=arr.some((v)=>{
    return v>0
})
console.log(isgre)

// find method
let value=arr.find((v,i)=>{
    console.log("index",i)
    return v===2;
})
console.log(value)

let Lastvalue=arr.findLast((v,i)=>{
    console.log("index",i)
    return v===2;
})
console.log(Lastvalue)

let valueIdx=arr.findIndex((v)=>{
    return v===2;
})
console.log(valueIdx)

//check if all numbers are even

let nums=[2,4,6,8]

let isEven=nums.every(v=> v%2 ===0);
console.log(isEven)


// check if all strings have length 3

let fruits=["apple", "banana", "kiwi"]

let isStr=fruits.every(v=> v.length >3);
console.log(isStr)

// check if all users are active (active =true):
let users=[
    {name:"A", active: true},
    {name:"B", active: true},
    {name:"C", active: false}
];

console.log (users.every(v => v.active ===true));

// check if all elements in an array are unique using only every().

let numArr=[1,2,3,4,5,2]
console.log(numArr.every((v,i) => numArr.indexOf(v)===i))

// check if any product is out of stock
let products=[
    {name: "Pen", qty:10},
    {name: "Book", qty:0},
    {name: "Pencil", qty:5}
];

console.log(products.some(v => v.qty ===0))

// find the first user with admin =true:

let listOfuser=[
    {name: "A", admin: false},
    {name: "B", admin: false},
    {name: "C", admin: true}
]

console.log(listOfuser.find(v => v.admin ===true));


let numbersArr=[1,2,5,3,9,6];
console.log(numbersArr.sort((a,b)=>b-a));


// Math

console.log(Math.PI)
console.log(Math.SQRT2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.SQRT1_2)
console.log(Math.LOG2E)
console.log(Math.LOG10E)


// function //methods

console.log(Math.max(1,2,4,50))
console.log(Math.min(1,2,3,4))
console.log(Math.round(3.98))
console.log(Math.floor(-4.98)) //just lessthan
console.log(Math.ceil(4.8)) //just greater
console.log(Math.random())  //any umber from 0 to 1
console.log(Math.pow(2,3))
console.log(Math.sqrt(49))
console.log(Math.cbrt(8))
console.log(Math.cbrt(27))
console.log(Math.abs(2.367))



let obj={
    name:"Qlith",
    age: 20,
    phone: 9978756362
}

delete obj.phone
console.log(obj);

Object.freeze(obj)
obj.age=40;
console.log(obj)

console.log(obj)
obj.name="inno"
console.log(obj)

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(Object.fromEntries([[1,1],[2,4],[3,9]]));


