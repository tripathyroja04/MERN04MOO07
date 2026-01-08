
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Dashboard from './Components/Dashboard.jsx'
import WrongPath from './Components/WrongPath.jsx'

function App() {

  // give the browser router to the parent
  // create routes
  // create route for each component
    // =>inside the route write the path or declare the path and declare the element which follows the path

 
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<WrongPath />}></Route>
      </Routes>
    </div>
  ) 
}

export default App
