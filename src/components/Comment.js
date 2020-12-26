import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {
    

    let post = props.posts[props.match.params.id -1]
    // an array that accesses a specific element in an array. This allows us to access a post by an id

    return (
        <div>
            <h2>
                { post ? post.title : null } <br/>
            </h2>
            <p>
                { post ? post.content : null } <br/>
                {/* { post ? post.image_url : null }, <br/>
                { post ? post.user_id : null } <br/> */}
            </p>
            <CommentsContainer post={post} />
            <h4>Edit Comment</h4>
            <CommentEdit comment={comment}/>
        </div>
    )
};

export default Post;