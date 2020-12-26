import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {

  return (
    <div>
        <ul id="nav">
            <li>

                <Link to='/' id="link">Home  </Link>
                <Link to='/posts' id="link">Posts  </Link>
                <Link to='/posts/new' id="link"> Add Post</Link>
            </li>
        </ul>
    </div>

  )
}

export default NavBar