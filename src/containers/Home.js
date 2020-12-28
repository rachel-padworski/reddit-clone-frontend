import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Posts } from '../components/Posts';
// import Header from '../components/Header';

class Home extends React.Component {

    // add a componentDidMount() to get the currentuser()

    render() {
        return(
            <div>
                <h1 className="heading">Welcome to NotePad</h1>
                <ul>
                    <li>
                        <Link to="/posts/new" className="post-links">
                            <img className="icon" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-256.png" alt="write icon"/>
                            Write a Post
                        </Link><br/>
                        <Link to="/posts" className="post-links">
                            <img className="icon" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/book-256.png" alt="read icon"/>
                            Read Some Posts
                        </Link>

                    </li>
                </ul>
                {/* <h2>Most Recent Posts</h2>
                <ul>
                    <li>
                        <Posts />
                    </li>
                </ul> */}
            </div>
        )
    }

    // mapStateToProps currentUser: state.currentUser

}

export default connect()(Home);