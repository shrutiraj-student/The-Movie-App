import { googleLogout } from '@react-oauth/google'
import React from 'react'

const Logout = () => {
    function logout(){
        googleLogout();
        console.log("Log out Successfully")
    }
  return (
    <div>
    <button onClick={()=>logout()} style={{color:"white"}}>Logout</button>
      
    </div>
  )
}

export default Logout

