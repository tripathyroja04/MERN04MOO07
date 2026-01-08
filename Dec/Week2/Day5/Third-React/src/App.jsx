import './App.css'
import Home from './Home'
import Home2 from './Home2'
import Card from './Compoonent/Card'
function App() {
 
  let obj={
  name: "xyz",
  age: 30,
  phone:234658789
  }

  let handelFun=()=>{
   console.log("Hii handel function")
  }

  return (
    <>
      <h1>Home</h1>
      <Home a={20} str="example" isT={true} arr={[1,2,3,4]}  obj={obj} handelFun={handelFun}/>
     
      

      <Home2 b={50} obj={obj}>
        <button>Click Me</button>
        <p>This is children paragraph</p>
        <b>This is bold text</b>
      </Home2>

      <div className='flex gap-2 flex-wrap mt-40 ml-20'></div>
      <Card img=""/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
