// import userEvent from '@testing-library/user-event';
import React from 'react';
// import { Redirect } from 'react-router-dom';
import CommentsContainer from '../containers/CommentsContainer';
import { connect } from 'react-redux';
import { selectedPost } from '../actions/selectedPost'


class Post extends React.Component {
    constructor(props) {
        super()
        this.post = props.posts[props.match.params.id -1]
    }
    // an array that accesses a specific element in an array. This allows us to access a this.post by an id
    // let comment = this.props.this.posts[this.props.match.params.id -1].comments

    componentDidMount = () => {
        if (localStorage.selectedPost.id !== this.post.id){
            this.props.selectedPost(this.post)
        } else {
            this.props.selectedPost(localStorage.selectedPost)
        }
    }

    render() {
        return (
            <div>
                <img id="this.post-img" src={ this.post ? this.post.image_url : null } alt={ this.post ? this.post.title : null } />
                <h2 className="heading">
                    { this.post ? this.post.title : null } <br/>
                </h2>
            
                <p className="content">
                    { this.post ? this.post.content : null } <br/>
                </p>
                    {/* { this.post ? null : <Redirect to='/this.posts'/> }, */}
                <div className="comments">
                    <CommentsContainer post={this.post}/>
                </div>
            </div>
        )
    }
};

export default connect(null, { selectedPost })(Post);