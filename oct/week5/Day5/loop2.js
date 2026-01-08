console.log("we are going to learn loops");
// for loop
console.log({}=={});

let a={};
let b=a;

console.log(a==b);

// console.log(0===undefined);

//for-in   / for-of

let arr=[10,20,30,40,50];

// for(let idx=0; idx<arr.length; idx++){
//     console.log(idx + ":",arr[idx]);
// }

for(let i in arr){
    // console.log(index + ":",arr[index]);
    console.log(arr[i]);
}

let obj={
    name:"Roja👻🍔🍟🍡🍫🍬🍭",
    age:22,
    password:"roja123",
    arr1:[1,2,3,4]
};

for(let key in obj){
    console.log(key + "-",obj[key]);
}

for(let val of arr){
    console.log(val);
}

for (let v of obj.arr1){
    console.log(v);
}

let numArr=[1,2,3,4,5,6,7,8,9,]
// for(let v of numArr){
//     if(v==5){
//         break;
//     }
//     console.log(v);
// }

for(let v of numArr){
    if(v==5){
        continue;
    }   
    console.log(v);
}