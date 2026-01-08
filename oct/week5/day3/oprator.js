console.log("today is the second day of operators");

let num1=2;
let num2=3;

console.log(num1+num2 / 2*4); //8


//if(condition){
//statements
//}
if(false){
    console.log("this is execute only if condition is true");
}else{
    console.log("this is execute when condition is false");
}

// if(true)
//     console.log("hii");
// console.log("hello");

if(true){

}else if(false){

}   else{

}

let a =2;
if ((a<1)&&(a++<4)){
    console.log ("true",a);
}else{
    console.log("false",a);
}


// const number=prompt("enter your age");
// console.log(number);

// if (number%5==0){    
//     console.log("number is multiple of 5");
// }else{
//     console.log("number is not multiple of 5");
// }

const score=prompt("enter your score");
console.log(score);

if (score>=80 && score<=100){
    console.log("A grade");
}else if (score>=70 && score<=79){
    console.log("B grade");
}else if (score>=60 && score<=69){
    console.log("C grade");
}   else if (score>=50 && score<=59){
    console.log("D grade");
}   else if (score>=0 && score<=49){
    console.log("F grade");
}else{
    console.log("invalid score");
}