// some extra event

//  for the tags input, select
// what aare the events (input,changes,focus,blur)

let input = document.querySelector("input");
input.addEventListener("blur",(e)=>{
    console.log(e)
    console.log("input field blur")
})

// mouse
// what are the event mousemove,mouseup,mousedown,mouseenter,mouseLeave

let p=document.querySelector("p");
p.addEventListener("mousemove",(e)=>{
    console.log(e)
    console.log("mouse move")
})
// p.addEventListener("mousedown",(e)=>{
//     console.log(e)
//     console.log("mouse down")
// })
// p.addEventListener("mouseup",(e)=>{
//     console.log(e)
//     console.log("mouse up")
// })
// p.addEventListener("mouseenter",(e)=>{
//     console.log(e)
//     console.log("mouse enter")
// })

// key
// what are the event of key keyup, keydown,keypress

// document.addEventListener("keydown",()=>{
//     console.log("Key down")
// })
// document.addEventListener("keyup",()=>{
//     console.log("Key Up")
// })
// document.addEventListener("keypress",()=>{
//     console.log("Key press")
// }) //not applicable for ctrl,alrt,shift

// document.addEventListener("keydown",(e)=>{
//     console.log("object",e);
//     console.log("key",e.key);
//     console.log("key code",e.keyCode);
//     console.log("code",e.code);
//     console.log("is alt key pressed",e.altKey);
//     console.log("is ctrl key pressed",e.ctrlKey);
//     console.log("is shift key pressed",e.shiftKey);
//     console.log("Key down");
// })

//special events
// load,DOMConttentloaded, scroll,resize
// window.addEventListener("DOMContentLoaded",(e)=>{
//     console.log(e)
//     console.log("window content loaded")
// })
// 

// window.addEventListener("scroll",(e)=>{
//      console.log(e);
//      console.log("page scroll event");
// })

// window.addEventListener("resize",(e)=>{
//     console.log(e)
//     console.log("page resize")
// })

let form= document.querySelector("form");
// console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelectorAll("form input")
    let nameInputValue=input[0].value;
    let ageInputValue=input[1].value;


    localStorage.setItem("userData",JSON.stringify({nameInputValue,ageInputValue}))
    localStorage.setItem("numb",30);
    alert("successfully data stored in localstorage")
    
})

let  fetchBtn=document.getElementById("fetch");
fetchBtn.addEventListener("click",()=>{
    let data=localStorage.getItem("userData");
    let numb=localStorage.getItem("numb");
    console.log(JSON.parse(numb))
    console.log(JSON.parse(data))
})

// Task :-
// step1-
// first you have to create a register page heving fields are (fullname,age,phone ,email,password)
// step2-
// stored the register data to the LocalStorage
// step3-
// Create a login form having fields(email,password)
// step4-
// compare the user input email and password at the time of login with the email and password that have already store insidde the local storage
