import './App.css';
import { useRef, useState } from 'react';

function App(props) {
  //mathcing re
  let emailMatching = /^[^\s@]+@[^\s@]+\.(?:com|net|org)$/g
  let passwordMatching = /^(?=.*[A-Z])(?=.*\d).{10,}$/g
  //states of inputs values
let [name,setName] = useState(``)
let [pass,setPass] = useState(``)
let [email,setEmail] = useState(``)
//ref of errors
let nameErr = useRef(null)
let passErr = useRef(null)
let emailErr = useRef(null)
//ref of inputs
  let userName = useRef(null)
let userPassword = useRef(null)
let userEmail = useRef(null)
//sub func
function submit(e){
  //check if form inputs are right written
  let v1 = false; let v2 = false ;let v3 = false
  //statments
  if(name.length >8 ){
    v1 = true
  }else{
    userName.current.style.border = `2px solid red`
    nameErr.current.style.display = `block`
  }
  if(pass.match(passwordMatching)!= null ){
    v2 = true
  }else{
    userPassword.current.style.border = `2px solid red`
    passErr.current.style.display = `block`
  }
  if(email.match(emailMatching) != null){
    v3 = true
  }else{
    userEmail.current.style.border = `2px solid red`
    emailErr.current.style.display = `block`
  }
  //should form be submitted or no
  if(v1 == false || v2 == false||v3 == false){
    e.preventDefault()
  }
}
//onChane inputs
function nameInput(e){
  setName(e.target.value) ;
   userName.current.style.border = `3px solid rgba(166, 185, 193, 1)`
   nameErr.current.style.display = `none`
}function passInput(e){
  setPass(e.target.value) ;
   userPassword.current.style.border = `3px solid rgba(166, 185, 193, 1)`
   passErr.current.style.display = `none`
}
function emailInput(e){
  setEmail(e.target.value) ;
   userEmail.current.style.border = `3px solid rgba(166, 185, 193, 1)`
   emailErr.current.style.display = `none`
}
return (
<form onSubmit={(e)=>{submit(e)}} >
  <h1>Sign up</h1>
  <div className='inputs'>
    <label>your name:</label>
      <input type='text' placeholder='Your name' onChange={(e)=>{nameInput(e)}}ref={userName} />
      <div className='err' ref={nameErr}>write a valid name</div>
      <label>your password:</label>
      <input type='password' placeholder='Your password' onChange={(e)=>{passInput(e)}} ref={userPassword}/>
      <div className='err' ref={passErr}>write a valid pass: 10characters at least, 1 number and 1 Capitale letter at least </div>
      <label>your Email:</label>
      <input type='text' placeholder='Your Email' onChange={(e)=>{emailInput(e)}} ref={userEmail} />
      <div className='err' ref={emailErr}>write a valid email</div>
      <button type='submit'>Submit</button>
  </div> 
</form>
)
}

export default App;
