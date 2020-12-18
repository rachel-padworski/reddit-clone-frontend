import React from 'react';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments';


class CommentsContainer extends React.Component {

// when rendering the Comments component: if this.props.post exists, then the array of comments with also come through
render() {
    return (
        <div>
            <CommentInput />
            <Comments comments={this.props.post && this.props.post.comments}/>
        </div>
    )
}


}

export default CommentsContainer;
