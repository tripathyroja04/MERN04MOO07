console.log("Hello we are going to read function")

// types of function
//      =>anonymous function (it is function which has no name)

//e.g 
// function(){
//    // any statement
// }

// declaration of function -> function keyword,(), implementation

//named function

function F1(){
    console.log("my f1 is executing");
}
//declarion -> function, name of the function, paranthesis(), implementation

F1();   // calling part

let f=90;
console.log(f);

function F1(){
    console.log("Second function")
}
F1();

// Expresstional function

let F2= function(){
    console.log("Expressional function")
}
// console.log("Expresstional")
F2();

// declaration -> (let,const,var) key word, variable, assignment operator,anonymous function

console.log(typeof F2)

//Nested function

let parent=function(){
    let a=10;
    let child=function(){
        let b=30
        console.log("addition:", a+b)
    }
    // child()
    return child
}

parent()() // function currying 
// console.log(parent);

let returnFun=function(){
    console.log("before return")
    let obj={
        name:"xyz",
        age:20
    }
    return obj;
}

let value = returnFun()
console.log(value)

// arrow function

let arrowFun=()=>{
    console.log("this is a arrow function");
}
arrowFun()

let addFun=(a,b)=>{
    // let a=10;
    // let b=30;
    // console.log("addition:", a+b)
    let sum=a+b;
    return sum;

}
let sum =addFun(10,30);
console.log(sum);

// use a single arrow function and perform (+,-,*,/,**,%)

let allFun=(a,b,op)=>{
//     let sum=a+b; return sum;
//     let sub=a-b; return sub;
//     let mul=a*b; return mul;
//     let div=a/b; return div;
    
// }
// let  = allFun(10,20);


}




