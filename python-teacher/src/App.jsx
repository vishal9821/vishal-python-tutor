import Right from './components/right';
import Middle from './components/middle';
import Left from './components/left';
import './App.css';
import Login from './authentication/login';
import FOOTER from './components/footer';
import { useState } from 'react';

function App(){

  const [isUser,setUser]=useState(false)

  function userDetails(){
    setUser((p)=>{
       return !p;
    })
  }
const footerStyle = {
    position: "relative",
    top: 0,
    right: "8%"
    };

  return (
    <>
    {isUser?
        <div>
    <div className="container">
    <Right userDetails={userDetails}/>
    <Middle />
    <Left />
    </div>
    <FOOTER />
    </div>
  :<Login userDetails={userDetails}/>}
  </>
  )
}

export default App
