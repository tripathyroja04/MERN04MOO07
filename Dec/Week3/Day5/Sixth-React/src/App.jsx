import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {

// const [a,setA] = useState(0);

// let a = 1;
// function update(){
  //   a++;
  //   console.log(a);
  
  // }


  // const [name,setName] = useState("");
 
  // let handleText=()=>{
  //   setName("hii");
  // }


  // const [obj,setObj] = useState({});
  // function handleObj(){
  //   setObj({
  //     name: "hii",
  //     age:20
  //   })
  // }

  return (
    <>
     hello
     <br />
     {/* direct calling */}
     {/* <button onClick={update()}>Increment</button> */}

     {/* indirect calling */}
     {/* <button onClick={()=>update()}>increment</button> */}
{/* 
     <br />
     value {a}

     <br />
     <button onClick={()=> setA(a+1)}>Increment</button>

     <br />
     name :  {name}
     <button onClick={handleText}>click here to add some text</button>
     <br />
     
      <br />
      name {obj.name}
     <button onClick={handleObj}>click here for object</button> */}
     <Home/>

    </>
  )
}

export default App