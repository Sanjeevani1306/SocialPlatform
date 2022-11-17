import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import AddQuestion from './AddQuestion'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import {Link} from 'react-router-dom';

function Navbar({onRouteChange, name}) {
    return (
        <Router>
        <div className="navbar">
            <div>
               <p className="logo">Forum</p> 
            </div>
         {/*   <div className="input">
                <input className="inputBar" type="text" placeholder="Search Quora" />
            </div>*/}
            <div className="links">
              {/*  <Link className="link" to='/addquestion'>Add Question</Link>
                <Link className="link" to='/spaces'>Spaces</Link>
                <a className="link" href="https://www.quora.com/">Answer</a>*/}
                <a className="link" href="https://www.quora.com/">Welcome, {name}</a>
                <p className="link"  onClick={() => onRouteChange('signout')}>Logout</p>
            </div>
        </div>

        
        </Router>
    
    )
}

export default Navbar
