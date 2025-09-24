import React, { useState } from 'react'
import { gapi } from "gapi-script";
import Home from './components/Home'
import { useEffect } from 'react';


const App = () => {
  const initializeGapi = () => {
    gapi.client.init({
      clientId: clientId,
      scope: "",
    });
  };
  useEffect(() =>{
    // load and init google api scripts
    gapi.load("client:auth2", initializeGapi);
  })

  return (
    <div>
      <Home/>
    
    </div>
  )
}

export default App
