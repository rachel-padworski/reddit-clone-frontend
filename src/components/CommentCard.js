import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../actions/editComment';

const Comments = (props) => {
    // every time we refresh, the store and the state clear out.
    // before we map through props.comments, we need to make sure the props are defined first. 
    // console.log(props, "Comments props")
    const handleDelete = (comment) => {
        props.deleteComment(comment.id)
    }

    // need to pass this the comment id.
    // also need to figure out how to create a form to edit the comment
    // const handleEdit = (comment) => {
    //     console.log(comment, "Comments component")
    //     props.editComment(comment.id)
    // }

    return (
        <div>
            <li id="comment">
                {props.comment.content} <br/>
                {props.comment.user_id} <br/>
                <button id="comment-button" onClick={() => handleDelete(props.comment)}>Delete</button>
                {/* <button id="comment-button" onClick={() => handleEdit(props.comment)}>Edit</button> */}
            </li>
           
        {/* <Post comments={comments}/> */}
        </div>
    )


}


// const mapStateToProps = (state, props) => {
//     const postsFilter = state.posts.length > 0 ? state.posts.filter(post => post.id === props.post.id).comments : null
//     console.log(postsFilter, "postsFilter")
//     return {comments: postsFilter}
// }

export default connect(null, { deleteComment, editComment })(Comments);


// import React from 'react';
// import { connect } from 'react-redux';
// import { deleteComment, editComment } from '../actions/editComment';

// const CommentCard = (props) => {
    
//     // const handleDelete = (comment) => {
//     //     props.deleteComment(comment.id)
//     // }

//     // const handleEdit = (comment) => {
//     //     props.editComment(comment.id)
//     // }
//     console.log(props, "commentCard props")
//     const { content } = props
//     return (
//     <div className="comment">
//         <li  id="comment">
//             { content }
//         </li>
//         {/* {props.comments && props.comments.map(comment =>
//             <li key={comment.id} id="comment">
//                 {comment.content} <br/>
//                 <button id="comment-button" onClick={() => handleDelete(comment)}>Delete</button>
//                 <button id="comment-button" onClick={() => handleEdit(comment)}>Edit</button>
//             </li>
           
//            )} */}
//     </div>
//     )


// }

// export default connect(null, { deleteComment, editComment })(CommentCard);