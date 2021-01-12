import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {

  return (
    <div>
        <ul id="nav">
            <li>
                <Link to='/' id="logo"><img className="logo" src="https://i.ibb.co/jvBcBtc/Screen-Shot-2020-12-26-at-6-47-08-PM.png" alt="logo"></img></Link>
                <Link to='/' id="link">Home  </Link>
                <Link to='/posts' id="link">Posts  </Link>
                <Link to='/posts/new' id="link"> Add Post  </Link>
                <h2 id="logout-button">Logout</h2>
            </li>
        </ul>
    </div>

  )
}

export default NavBar