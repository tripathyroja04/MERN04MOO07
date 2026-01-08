import React from 'react'

function Navbar({setIsLogin,isLogin }) {
  return (
    <div>
        <nav className='w-full p-5 bg-amber-950 flex justify-end'> 
      <button className='py-2 px-2 bg-amber-400 rounded uppercase font-bold'
      onClick={()=>setIsLogin(true)}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
      
      </nav> 
    </div>
  )
}

export default Navbar