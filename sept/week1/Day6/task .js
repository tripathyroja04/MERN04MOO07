console.log("This is the task day");

//1.Create an array of 5 fruits.Print the first and last elements using indexing.

let fruits = ["Apple", "Banana", "Guava", "Orange", "Grapes"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

//2.Add "Mango" to the end of the array using push() and "Kiwi" to the start using unshift().
fruits.push("Mango");
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);

//3.Remove the first and last elements using shift() and pop().
fruits.shift();
fruits.pop();
console.log(fruits);

//4.Find the length of an array without using .length property (using loop).
let fruit = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let count = 0;

//5. Loop through the array and increment count
for (let fruit of fruits) {
  count++;
}

console.log("Length of array:", count);

//6.Use indexOf() to find the position of "Banana" in an array.
console.log(fruits.indexOf("Banana"));

//7.Use includes() to check if "Orange" exists in the array.
console.log(fruits.includes("Orange"));

//8.Convert an array of numbers [1,2,3,4,5] into a string separated by “-” using join().
let arr=[1,2,3,4,5]
console.log(arr)
console.log(arr.join("-"));

//9.Given an array [1, 2, 3, 2, 1, 4, 5], remove duplicates.
// let arr1=[1,2,3,2,1,4,5]
// console.log(arr1.push())

//10.Given an array of strings, return the one with the longest length.
let strings = ["apple", "banana", "kiwi", "watermelon", "grape"];
let longest = "";

for (let str of strings) {
  if (str.length > longest.length) {
    longest = str;
  }
}

console.log("Longest string:", longest);

//11.Reverse a string using array methods (split(), reverse(), join()).
let str = "hello";

let reversed = str.split("").reverse().join(",");

console.log("Reversed string:", reversed);

//12.Count how many even numbers exist in [2, 5, 8, 11, 14, 17, 20].
let arr3 = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;

for (let num of arr) {
  if (num % 2 === 0) {
    evenCount++;
  }
}

console.log("Number of even elements:", evenCount);

//13.Create a new array that contains the length of each string from ["React", "Node", "MongoDB"].

let strARR=["React", "Node", "MongoDB"];
let strNUM=[]
for(let v of strARR){
  strNUM.push(v.length)
}
console.log(strNUM);

//14.Replace all negative numbers in [4, -2, 6, -9, 7] with 0
let numARR=[4, -2, 6, -9, 7];
for(let i = 0; i<numARR.length; i++){
  if(numARR[i]<0){
    numARR[i]=0
  }
}
console.log (numARR);

//second technique

let numARR2=[4, -2, 6, -9, 7];
for(let i = 0; i<numARR2.length; i++){
  // if(numARR[i]<0){
  //   numARR.splice(i)
  //   numARR[i]=0
  // }
  if (numARR2[i]<0){
    numARR2.splice(i,1,0);
  }
}

console.log(numARR2);

//reverse

let nameOFC="QLITH";
console.log(nameOFC.split(""))