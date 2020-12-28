import React from 'react';
import { Link } from 'react-router-dom';

//renders a list of all posts
//functional components have to pass props in as the argument instead of this.props 
const Posts = (props) => {
    // everything we need from the component comes from postContainer
    return (
        <div>
            {props.posts && props.posts.map(post => 
                <div key={post.id} className="card">
                    <Link to={`/posts/${post.id}`} className="post-links">
                        <img src={post.image_url} alt={post.title} />
                        {post.title}
                        
                    </Link>
                </div> 
            )}
        </div>
    )
}


export default Posts;