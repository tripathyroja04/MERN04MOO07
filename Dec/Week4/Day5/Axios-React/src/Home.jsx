import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Home() {

  let [data,setdata]= useState([]);
 
  let getData = async () =>{
    try {
      // let res= await fetch("https://jsonplaceholder.typicode.com/posts");
      // let dataList= await res.json();
      // setdata(dataList);

    //   let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //  setdata(res.data);

    // let res = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
    // console.log(res.data)

    // let res = await axios.post("https://jsonplaceholder.typicode.com/posts",{
    //   title: 'Hii title',
    //   body: 'bar',
    //   userId: 1,
    // });
    // console.log(res.data)

    // let res = await axios.put("https://jsonplaceholder.typicode.com/posts/1",{
    //   id: 1,
    //   title: 'updated title',
    //   body: 'updated body',
    //   userId: 1,
    // });
    // console.log(res.data)

    // let res = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    // console.log(res.data)

   
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setdata(res.data);

    } 
    catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() =>{  
  getData();
  },[])

  console.log(data)

  return (
   <div>
      <h1 className='bg-red-900'> Data</h1>

      <ul>
        
        {
          data.map((obj)=>(
            <li key={obj.id}>{obj.title}</li>
          ))
        }
      </ul>
       <Home/>
    </div>
  )
}

export default Home