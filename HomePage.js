import React, { useState } from "react";
import Navbar from './Navbar'
import Left from './Left.js';
import  Right  from "./Right.js";
import Question from './Question'
import Register from './Register';
import './HomePage.css'

const HomePage = () => {
    const [isSignedIn, setIsSignedIn] = useState('false')
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState('');


  const onRouteChange = (route) => {
      if (route === 'home'){
        setIsSignedIn(true);
        //if user is on home page he is signed in 
      }
      else {
        setIsSignedIn(false);
        // if he clicks on logout signedin will be equal to false through usestate hook.
      }
  }

  const loadUser = (data) => {
    setUserId(data.id);
    setName(data.fname);
  }
    return (
        <div className="homePage">
        {/*
               < Navbar onRouteChange={onRouteChange} name={name}/>
        < Left userId={userId}/>
        < Right className="app__right" userId={userId}/>
        < Question userId={userId}/>
        */ }
     
        {
          //if user is signed in , show him following components 
          (isSignedIn=== true) ?( 
            <div className="app">   
           < Navbar onRouteChange={onRouteChange} name={name}/>
        < Left userId={userId}/>
        < Right className="app__right" userId={userId}/>
        < Question userId={userId}/>
         
           </div>
          )
           :(
             <div>
                <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
             </div>
           )

        }
        </div>
    )
}

export default HomePage
