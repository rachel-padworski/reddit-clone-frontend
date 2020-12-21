import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../actions/editComment';

const Comments = (props) => {
    // every time we refresh, the store and the state clear out.
    // before we map through props.comments, we need to make sure the props are defined first. 
    
    const handleDelete = (comment) => {
        props.deleteComment(comment.id)
    }

    // need to pass this the comment id.
    // also need to figure out how to create a form to edit the comment
    const handleEdit = (comment) => {
        props.editComment(comment.id)
    }

    return (
    <div>
        {props.comments && props.comments.map(comment =>
            <li key={comment.id}>
                {comment.content} <br/>
                {comment.user_id} <br/>
                <button onClick={() => handleDelete(comment)}>Delete</button>
                <button onClick={() => handleEdit(comment)}>Edit</button>
            </li>    
        )}
    </div>
    )


}

export default connect(null, { deleteComment, editComment })(Comments);