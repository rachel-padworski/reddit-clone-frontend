import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <h1>Welcome Home</h1>
                <p>What would you like to do?</p>
                <ul>
                    <li>
                        <Link to="/posts/new" id="post-links">
                            Write a Post
                        </Link><br/>
                        <Link to="/posts" id="post-links">
                            Read Some Posts
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;