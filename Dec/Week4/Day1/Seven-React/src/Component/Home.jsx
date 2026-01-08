import React, { use, useEffect, useState } from 'react'
import Navbar from './Navbar'

function Home() {

    const [data,setData]=useState([]);
    let getData=async ()=>{
        let promise= await fetch("https://jsonplaceholder.typicode.com/posts");
        // // console.log(promise)
        // promise.then((data)=>{
        //     let data=res.json();
        //     data.then((data)=>{
        //         console.log(data)
        //     })
        // })

        let data=await promise.json();
        setData(data);
    }
    getData();
    // console.log(data)

    useEffect(()=>{
        getData();
    },[])

    // console.log("data",data)
  return (
    <div>
    
        Home
        </div>
  )
}

export default Home