import React from 'react';

//renders a list of all posts
//functional components have to pass props in as the argument instead of this.props 
const Posts = (props) => {
    return (
        <div>
            {this.props.posts.map(post => <li key={post.id}>{post.title} {post.image_url} {post.content}</li>)}
        </div>
    )
}

export default Posts;