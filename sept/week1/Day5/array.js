
console.log("Today we are going to learn about Arrays method");

let arr=[1,2,3,4,5];
console.log(arr);

let arrObj=new Array(6,7,8,9);
console.log(arrObj);

console.log(Array(3).fill("js")); //creates an array of size 3 and fills with 'js'
console.log(Array.of(arr)); //creates an array from string
console.log(Array.from("abc")); //creates an array from array-like object

//manipulating array elements
arr.push(6); //adds element at the end
console.log(arr)
arr.push(7,8,9,"hello",true)
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift();
console.log(arr)

console.log(arr.includes(6)) //check the value is present or not

console.log(arr.at(0))

console.log(arr.indexOf(2))

let num=0;
console.log(Array.isArray(num))

console.log(arr.reverse())
console.log(arr)

console.log(arr.toReversed())
console.log(arr)


let numArr=[3,5,1,0]
// console.log([3,5,1,0].sort())
// console.log(numArr)

console.log(numArr.toSorted())
console.log(numArr)

console.log(arr.slice(1,5))

arr.splice(0,2,"hii",89,67,45)
console.log(arr)

console.log(arr.join(""))

console.log(arr.join(","))
console.log(arr.toString(""))
console.log([[1,2],[3,4],[5,6]].flat())






