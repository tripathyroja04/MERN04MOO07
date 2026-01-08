console.log("today we are going to learn DOM object");
// querySelector();  it accept id,class ans tag name. it always return a songke value element

let h1=document.querySelector("#head");
console.log(h1);

let div1st=document.querySelector(".box");
console.log(div1st);

let firstp= document.querySelector("p");
console.log(firstp);

let classes=document.querySelectorAll(".box");
console.log(classes[1])

// Q. what is difference between html collection & node list;
div1st.setAttribute("id","headingId");
console.log(div1st);
console.log(div1st.getAttribute("class"))








