import React from 'react'

function Home2({b=20,obj,children="Hii"}) {
  return (
    <div>
        This is home 2
        <br/>
        {b}
        <h2 className='bg-blue-500'>This is home 2 heading</h2>
        <br/>
        {obj.name}
        <br/>
        {children}
    </div>
  )
}

export default Home2