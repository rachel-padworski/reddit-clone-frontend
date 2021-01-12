import React from 'react';
import CommentInput from '../components/CommentInput';
import CommentCard from '../components/CommentCard';
// import CommentEdit from '../components/CommentEdit';
import { connect } from 'react-redux';


class CommentsContainer extends React.Component {
    
    renderComments = () => {
        console.log(this.props, "props in commentscontainer")
        console.log(this.props.selectedPost.comments, "rendercomments in commentcontainer")
        return this.props.selectedPost.comments.map(comment => {return <CommentCard key={comment.id} comment={comment} />})
    }
    
    render() {
        // console.log(this.props.post, "post in commentscontainer")
        return (
            <div>
                <CommentInput post={this.props.post} />
                {/* <CommentCard post={ this.props.post } /> */}
                {this.renderComments()}
                {/* <CommentEdit comments={this.props.post && this.props.post.comments} /> */}
            </div>
        )
    }


}

    const mapStateToProps = (state) => {
        console.log(state)
        return {selectedPost: state.posts.selectedPost}
    }

export default connect( mapStateToProps )(CommentsContainer);
