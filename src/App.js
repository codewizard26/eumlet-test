import React, { useState,useEffect } from 'react';
import './App.css';
import Kyc from './Kyc';
import Home from './Home';
import { Route, Redirect, useParams, Routes, useLocation } from 'react-router-dom';


const App = () => {


const [sessionId,setSessionId] = useState(null)
const [redirectUrl,setRedirectUrl] = useState(null)
const [nonce , setNonce] = useState(null)

// fething queryParameters

const location = useLocation()

useEffect(() =>{
  const searchParams = new URLSearchParams(location.search)

  const sessionId = searchParams.get('session_id')
  const redirectUrl = searchParams.get('redirect_url')
  const nonce = searchParams.get('nonce')

  console.log(location)
  

  if (sessionId){
    console.log(`session Id from query string: ${sessionId}`)
    setSessionId(sessionId)
    setRedirectUrl(redirectUrl)
    setNonce(nonce)

  }
},[location.search])


  return (
    <div className="App">
      <Home sessionId={sessionId} redirectUrl = {redirectUrl} nonce={nonce} />
    </div>
  );
};

export default App;

