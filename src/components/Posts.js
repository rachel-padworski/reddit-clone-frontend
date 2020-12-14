import React from 'react';
import Post from './Post';
//renders a list of all posts
//functional components have to pass props in as the argument instead of this.props 
const Posts = (props) => {
    return (
        <div>
            {props.posts.map(post => 
                <div key={post.id}><Post post={post}/></div> )}
        </div>
    )
}
// key={post.id}
//key={post.toString()} value={post}

export default Posts;