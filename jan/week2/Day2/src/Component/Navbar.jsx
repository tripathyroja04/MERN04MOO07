import React from 'react'

function Navbar() {
  return (
    <div className='w-screen bg-red-900 p-6'>
        <div className='max-w-7xl mx-aut0 bg-green-500 flex justify-between p-2'>
        <p className='text-xl font-bold text-red-500'>Food <span className='text-white'></span> Hotel</p>
        <Navlink to="">Foods</Navlink>
        </div>
    </div>
  )
}

export default Navbar