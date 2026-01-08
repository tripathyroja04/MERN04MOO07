import React from 'react'
import { useNavigate } from 'react-router'

function About() {

    let navigate = useNavigate();   
    let {pathname} = useLocation();
    console.log(pathname)

    function handelClick(){
        navigate("/profile?search=std1&cata=3");
    }

  return (
    <div>About
        <button onClick={handelClick}>
            go to profile
        </button>
    </div>
  )
}

export default About