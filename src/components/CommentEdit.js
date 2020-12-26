import React from 'react';
import { connect } from 'react-redux'; //dispatches the action to the reducer
import { editComment } from '../actions/editComment';

class CommentEdit extends React.Component {

    state = {
        content: '',
        user_id: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: (event.target.value)
        })
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
        // this.props.addComment({comment: {content: this.state.content, post_id: this.props.post.id, user_id: this.state.user_id} })
    //     this.setState({
    //         content: '',
    //         user_id: ''
    //     })
    // }

    handleEdit = (event) => {
        console.log(event, "CommentEdit component")
        event.preventDefault()
        // need the form to be filled with the comment that needs to be edited 
        // let comment = { ...this.state, id: this.props.comment.id}
        // this.props.editComment(comment)
        this.props.editComment({comment: {content: this.state.content, post_id: this.props.post.id, user_id: this.state.user_id} })

        this.setState({
            content: '',
            user_id: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <label>Leave a Comment:</label><br/>
                    <input type="text" 
                    placeholder="What are your thoughts?"
                    name="content" 
                    value={this.state.content} 
                    onChange={this.handleChange}/><br/>
                    <input type="number"
                    placeholder="user id"
                    name="user_id"
                    value={this.state.user_id}
                    onChange={this.handleChange}
                    /><br/>
                   
                    <input type="submit"/><br/>
                </form>
            </div>
        )
    }

}


export default connect(null, { editComment })(CommentEdit);