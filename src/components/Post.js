// show page to show the post and comments
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import { Redirect } from 'react-router-dom';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {
    

    let post = props.posts[props.match.params.id -1]
    // an array that accesses a specific element in an array. This allows us to access a post by an id
    // console.log(post)

    // renders a post title, content, image_url, and user_id 
    return (
        <div>
            <h2>
            {/* { post ? null : <Redirect to='/posts'/> }, */}
                { post ? post.title : null } <br/>
            </h2>
            <p>
                { post ? post.content : null } <br/>
                {/* { post ? post.image_url : null }, <br/>
                { post ? post.user_id : null } <br/> */}
            </p>
            <CommentsContainer post={post} />
        </div>
    )
};

export default Post;