import React from 'react';
import CommentEdit from './CommentEdit';

const Comment = (props) => {
    


    // an array that accesses a specific element in an array. This allows us to access a post by an id

    return (
        <div>
       
            <h4>Edit Comment</h4>
            <CommentEdit comment={comment}/>
        </div>
    )
};

export default Post;