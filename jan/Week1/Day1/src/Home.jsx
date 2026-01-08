import React, { use } from 'react'
import { useRef } from 'react';
import { useState } from 'react';

function Home() {

    // it will manupulate the DOM directly

    let pRef=useRef();

    function handelClick(){
       console.log(pRef.current.innerText);
         pRef.current.style.color="red";
    }

    // const [email,setEmail]=useState("");
    // console.log(email)

    let emailRef=useRef(null);
    function handleSubmit(e){
        e.preventDefault();
    console.log(emailRef.current.value)
    }
//     const [email,setEmail]=useState("");
//   return (

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(emailRef.current.value);
    // }
    return (
    <div>
        <p ref={pRef}>Hello Welcome</p>
        <button onClick={handelClick}>
            Click here
        </button>

        <form onSubmit="handleSubmit">
            <input ref={emailRef} type="email" onChange={(e)=>setEmail(e.target.value)} />
        </form>
     </div>
  )
}

export default Home