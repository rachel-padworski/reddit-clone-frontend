import React from 'react';
import { connect } from 'react-redux'; //dispatches the action to the reducer
import { addComment } from '../actions/addComment';

class CommentInput extends React.Component {

    state = {
        content: '',
        user_id: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: (event.target.value)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment({comment: {content: this.state.content, post_id: this.props.post.id, user_id: this.state.user_id} })
        
        this.setState({
            content: '',
            user_id: ''
        })
    }


    render() {
        return (
            <div>
                <form id="comment-form" onSubmit={this.handleSubmit}>
                    <label>Leave a Comment:</label><br/>
                    <input id="input"
                    type="text" 
                    placeholder="What are your thoughts?"
                    name="content" 
                    value={this.state.content} 
                    onChange={this.handleChange}/><br/>
                    <input id="input"
                    type="number"
                    placeholder="user id"
                    name="user_id"
                    value={this.state.user_id}
                    onChange={this.handleChange}
                    /><br/>
                   
                    <input id="button" type="submit"/><br/>
                </form>
            </div>
        )
    }

}


export default connect(null, { addComment })(CommentInput);