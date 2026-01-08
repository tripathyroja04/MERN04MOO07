console.log ("TOday we are going to learn rest part of function")

//higher order function
// It is a function which is accepting a function as a parameter and it is returning function

let add=(a,b)=>{
    console.log("addition", a+b)
}
add(10)
// for accepting
let hof=function(fun){
    fun()
}
hof(
    ()=>{
    console.log("This is the argument fun")
})

// return

let returnHof=function(){
    let child=function(){
        console.log("this is child function")
        return 10
    }
    return child;
}
let childFunReturnValue=returnHof()()
console.log(childFunReturnValue)

//callback function - as an argument

// the function which is used as a argument at the time function calling is known as callback function
// mostly we will use arrow function as callback function

//IIF - Imediate infocing function

// (function(){
//     console.log("IIF function");
//     return ()=> {console.log("nexted fun")}
// })()()

// function print(){
//     console.log("Qulith")
// }

// print()
// print()
// print()

//Array specific method
// forEach, map, filter, reduce, find, same, every, sort

// forEach

let arr=[1,2,3,4,5];
// for (let v of arr){
//     console.log(v)
// }
// function forEach(){

// }
arr.forEach((v,i)=>{
console.log(i, "value :", v)
})

let returnFun1=()=>{
    return 10
}
let value=returnFun1()
// forEach method is only use for iteration , it has no return type


// map method

let newArr = arr.map((v)=>{
    return v+2;
})

console.log(newArr)

// filter function
let filterArr=arr.filter((v)=>{
    return v%2==0;
})
console.log(filterArr);

// reduce method
let additionValue=arr.reduce((sum,v)=>{
    return sum+=v
},0)
console.log("summation :",additionValue)

let mult=arr.reduce((mult,v)=>mult*v,1);
console.log("multiplication:",mult);

