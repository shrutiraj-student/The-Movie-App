import React, { useState } from 'react'
import { gapi } from "gapi-script";
import Home from './components/Home'
import { useEffect } from 'react';

const clientId =
  "782354341679-1321qghtu0cjf3pb8iopor7g1bkkctcu.apps.googleusercontent.com";
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
