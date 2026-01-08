import React, { use } from 'react'
import { useParams, useSearchParams } from 'react-router'


function Profile() {
    
// let {id}= useParams();
// let [searchParams]= useSearchParams();
let search= useSearchParams().get("search");
let cata= useSearchParams().get("cata");
console.log(search);
console.log(cata);
  return (
    <div>
        Profile
        <br />
        ID: {id}
        
    </div>
  )
}

export default Profile