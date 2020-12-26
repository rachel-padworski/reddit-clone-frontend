import React from 'react';
import { Link } from 'react-router-dom';
// import Post from './Post';

//renders a list of all posts
//functional components have to pass props in as the argument instead of this.props 
const Posts = (props) => {
    // everything we need from the component comes from postContainer
    console.log(props)
    return (
        <div>
            {props.posts && props.posts.map(post => 
            
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`} id="post-links">
                        {post.title}
                    </Link>
                </div> )}
        </div>
    )
}


export default Posts;