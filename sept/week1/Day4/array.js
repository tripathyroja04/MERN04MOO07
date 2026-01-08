console.log("Today we are learning about Arrays in JavaScript");

//two ways to create arrays
let arr = [1,2,3,4]; //using array literal
console.log(arr)

let arr2 = new Array(5,6,7,8); //using array constructor
console.log(arr2)

//accessing array elements
console.log("First element:", arr[0]);
console.log("Second element:", arr[1]);

console.log(Array.of(arr, arr2));

//printing array elements using for loop
// for(let i=0; i<arr.length; i++){
//     console.log(`Element at index ${i}:`, arr[i]);
// }
for(let i in arr){
    console.log(`Element at index ${i}:`, arr[i]);
}
for(let value of arr){
    console.log(`Element value:`, value);
}

let markArr = [85, 97, 44, 37, 76, 60];
//print aveg marks
let sum = 0;
for(let mark of markArr){
    sum += mark;
}
let avg = sum/markArr.length;
console.log("Average marks:", avg);


let prices=[250,645,300,900,50];
let totalPriceArr=0;

for(let price of prices){
    let discountedPrice = price*10/100;
    discountedPrice = price - discountedPrice;
    console.log(`Original Price: ${price}, Discounted Price: ${discountedPrice}`);
    //add discounted price to array
  
    totalPriceArr+= discountedPrice;
    let avgPrice = totalPriceArr/prices.length;
    console.log(`Average Price after discount: ${avgPrice}`);
    console.log(totalPriceArr);
}

//print n columns XXXXX
let n=5;
let pattern="";
for(let i=1; i<=n; i++){
    pattern +="X";
    console.log(pattern);

}
console.log(pattern);






