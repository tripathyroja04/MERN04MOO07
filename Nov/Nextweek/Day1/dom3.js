// // diff between nodelist n query selector
// let boxList= document.getElementsByClassName("box");
// console.log("before adding",boxList.length);

// // html colllection are live

// // this is used for creating a new div
// let div=document.createElement("div");
// div.className="box"
// div.innerText="item5"
// document.body.appendChild(div);

// console.log("after adding", boxList.length)

// // using query selector
// let boxes=document.querySelectorAll(".box");
// div.className="box"
// div.innerText="item5"
// document.body.appendChild(div);
// // this is not creat live
// console.log(boxes.length)

// console.log(Array.from(boxes))


// console.log(document.body)
// document.body.style="background-color:pink;font-size:20px"

// document.body.style.cssText="background-color:pink;font-size:20px"
console.log(document.body.firstChild.innerText);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);


let p =document.getElementById("para")
// console.log(p.className);
// p.className="paragra[h para1 para2 para3 para4";
console.log(p);
console.log(Array.from(p.classList));
p.classList.add("para4");
console.log(p);
p.classList.remove("para1");
console.log(p);
console.log(p.classList.contains("para2"))
p.classList.toggle("para5");
console.log(p);

document.querySelector("#btn").addEventListener("click",()=>{
//    document.body.style.backgroundColor="white"
    document.body.classList.toggle("white");
})

