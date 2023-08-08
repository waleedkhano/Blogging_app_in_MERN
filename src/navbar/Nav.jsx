import { Link } from "react-router-dom";
import React from "react";
import './nav.css'

const Nav = () =>{


    return(
      <nav>
          <div className="logo">
            <img src={require('../images/logo.png')} alt="logo"/>
          </div>
            <ul className="navList">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/blogs">Blog's</Link></li>
                <li><Link className="link" to="/create_blog">Create Blog's</Link></li>
            </ul>
            
      </nav>
    )
  }
  
  export default Nav;