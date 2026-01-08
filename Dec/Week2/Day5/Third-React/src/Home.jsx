import React from 'react'

function Home(props) {
  return (
    <>
   this is the home
    <br/>
    a value: {props.a}
    <br/>
    str value: {props.str}
    <br/>
    isT value: {props.isT.toString()}
    <br/>
    arr values: {props.arr}
    <br/>
    <ul>
        {
            props.arr.map((v,i)=> (
                <li key={i}>{v}</li>
            ))
        }
    </ul>
    <br/>
    obj values:
    <br/>
    Name: {props.obj.name}  
    <br/>
    Age: {props.obj.age}  
    <br/>
    Phone: {props.obj.phone} 
    <br/>
    <button onClick={props.handelFun}>Click Me</button>   
    </> 
  )
}

export default Home