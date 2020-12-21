import React from 'react';
import { Link } from 'react-router-dom';
// import Post from './Post';

//renders a list of all posts
//functional components have to pass props in as the argument instead of this.props 
const Posts = (props) => {
    // everything we need from the component comes from postContainer
    return (
        <div>
            {props.posts.map(post => 
            
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li> )}
        </div>
    )
}


export default Posts;