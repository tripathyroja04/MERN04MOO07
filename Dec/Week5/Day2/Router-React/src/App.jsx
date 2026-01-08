
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Service from './Component/Service.jsx'
import Nav from './Component/Nav.jsx'
import Profile from './Component/Profile.jsx'


function App() {
  

  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  )
}

export default App
