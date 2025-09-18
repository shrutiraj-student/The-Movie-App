import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import "./style/login.scss";


const Login = () => {
    const navigate = useNavigate();
    //const [user, setUser] = useState(null);
     const [user,setUser] = useState(()=>{
      const oldUser = localStorage.getItem("userInfo"); //checking if decodeScope exist or not
      if(!oldUser)return null;
      return JSON.parse(oldUser);
     });


     useEffect(()=>{
      localStorage.setItem("userInfo",JSON.stringify(user))
     },[user])
     

    function onSuccess(credentialResponse) {
        console.log('Logged in as: ', credentialResponse);
        const decodedScope = (jwtDecode(credentialResponse.credential))
        console.log(decodedScope);
        setUser(decodedScope)//setting in useState
        navigate("/");
      }
      function onFailure(error) {
        console.log(error);
      }
   function handleLogout(){
    googleLogout();
    setUser(null);
   }


  return (
    <div id="signButton">
      {!user ? (
        <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
      ) : (
        <div>
          <h4 style={{color:"white"}}>Welcome, {user.name}</h4>
          <button className="logoutBtn" onClick={handleLogout}>LOGOUT</button>

        </div>
      )}
    </div>

  );
};

export default Login;
