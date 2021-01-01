// import userEvent from '@testing-library/user-event';
import React from 'react';
// import { Redirect } from 'react-router-dom';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {
    

    let post = props.posts[props.match.params.id -1]
    // an array that accesses a specific element in an array. This allows us to access a post by an id

    return (
        <div>
            <img id="post-img" src={ post ? post.image_url : null } alt={ post ? post.title : null } />
            <h2 className="heading">
                {/* { post ? null : <Redirect to='/posts'/> }, */}
                { post ? post.title : null } <br/>
            </h2>
            <p className="content">
                { post ? post.content : null } <br/>
                {/* { post ? post.image_url : null }, <br/>
                { post ? post.user_id : null } <br/> */}
            </p>
            <CommentsContainer post={post} />
            {/* how do i show the new comment here when submited?  */}
        </div>
    )
};

export default Post;