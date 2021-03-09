import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Login from './Login'

function App() {
  const [id, setId] = useState()

  return (
    <>
    {id}
    <Login onIdSubmit={setId}/>
    </>
  );
}

export default App;
