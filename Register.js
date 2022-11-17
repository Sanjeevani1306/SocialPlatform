import React, { useReducer, useState } from 'react'
import './Register.css';
import Login from './Login'
import { LocalLaundryService } from '@material-ui/icons';
import { useSpring, animated } from "react-spring";



function Register({onRouteChange, loadUser}) {
    const [isRegistered, setIsRegistered] = useState(false);
    const [id, setId] = useState(17);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [field, setField] = useState('')
    const [password, setPassword] = useState('')

  /*   const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -1000 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 1000, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

    function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }*/
   

    const handleSubmit = (e) => {
        e.preventDefault(); // used so that page should not refresh after clicking 
        fetch('http://localhost:3000/register', { 
            method: 'post', // send the following data to database
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                fname: fname,
                lname: lname,
                email: email,
                designation: designation,
                field: field,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log(user)
            if (user) {
                loadUser(user)
                onRouteChange('home');
            }
        })
    }
    /*
    return (
      {/*
<div className='register'>
<div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <Login onRouteChange={onRouteChange} loadUser={loadUser}/>
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <div className="registerForm">
              <form onSubmit={handleSubmit}>
              <div className="registerSection">
              <div className="registerElement">
               <label htmlFor='firstName'>First Name : </label>
            <input
              type='text'
              name='firstName'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="input"
              placeholder="Enter your First Name"
            />
              </div>
                  
             <div className="registerElement">
                 <label htmlFor='lastName'>Last Name : </label>
            <input
              type='text'
              name='lastName'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="input"
              placeholder="Enter your Last Name"
            />
              </div>
           
             <div className="registerElement">
                <label htmlFor='email'>Email : </label>
            <input
              type='text'
              name='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your JKLU Email Id"
            />
              </div>
            
             <div className="registerElement">
                 <label htmlFor='password'>Password : </label>
            <input
              type='text'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your Password"
            />
              </div>
           
             <div className="registerElement">
                <label htmlFor='designation'>Designation : </label>
            <input
              type='text'
              name='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="input"
              placeholder="Enter your designation in JKLU"
            />
              </div>
            
             <div className="registerElement">
                 <label htmlFor='field'>Field : </label>
            <input
              type='text'
              name='field'
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="input"
              placeholder="Enter your bio"
           />
              </div>
                <button type='submit'>Sign Up</button>
              </div>
               
            </form>
            
        </div>
        </animated.form>
      </div>
    </div>
  );

*/
/*

<div>
      <div className='register'>
        <h1 className="heading"> J.K Lakshmipat University Questions Forum </h1>
        <div className="registerForm">
              <form onSubmit={handleSubmit}>
              <div className="registerSection">
              <div className="registerElement">
               <label htmlFor='firstName'>First Name : </label>
            <input
              type='text'
              name='firstName'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="input"
              placeholder="Enter your First Name"
            />
              </div>
                  
             <div className="registerElement">
                 <label htmlFor='lastName'>Last Name : </label>
            <input
              type='text'
              name='lastName'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="input"
              placeholder="Enter your Last Name"
            />
              </div>
           
             <div className="registerElement">
                <label htmlFor='email'>Email : </label>
            <input
              type='text'
              name='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your JKLU Email Id"
            />
              </div>
            
             <div className="registerElement">
                 <label htmlFor='password'>Password : </label>
            <input
              type='text'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your Password"
            />
              </div>
           
             <div className="registerElement">
                <label htmlFor='designation'>Designation : </label>
            <input
              type='text'
              name='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="input"
              placeholder="Enter your designation in JKLU"
            />
              </div>
            
             <div className="registerElement">
                 <label htmlFor='field'>Field : </label>
            <input
              type='text'
              name='field'
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="input"
              placeholder="Enter your bio"
           />
              </div>
                <button type='submit'>Sign Up</button>
              </div>
               
            </form>
             <Login onRouteChange={onRouteChange} loadUser={loadUser}/>
        </div>
         
        </div> 
        
    )*/


     return (
        <div className='register'>
        <h1 className="heading"> College Questions Forum </h1>
        <div className='register-wrapper'>
        <div className='register-section'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name : </label>
            <input
              type='text'
              name='firstName'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label htmlFor='lastName'>Last Name : </label>
            <input
              type='text'
              name='lastName'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              name='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password : </label>
            <input
              type='text'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='designation'>Designation : </label>
            <input
              type='text'
              name='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <label htmlFor='field'>Field : </label>
            <input
              type='text'
              name='field'
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
           
                <button type='submit' className='registerBtn'>Register</button>
            </form>
             <p className="bottomText">New User ? Please Register </p>
             </div>
             <div className="login-section">
            <Login onRouteChange={onRouteChange} loadUser={loadUser}/>
           </div>
            </div>
        </div>
    )
}




export default Register
