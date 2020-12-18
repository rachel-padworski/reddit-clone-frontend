import React from 'react';
import { connect } from 'react-redux';
import addPost from '../actions/addPost'

//will contain a controlled form for receiving input
class PostInput extends React.Component {
    
    state = {
        title: '',
        content: '',
        image_url: '',
        user_id: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addPost(this.state);
        this.setState({
            title: '',
            content: '',
            image_url: '',
            user_id: ''
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Create A Post</label>
                    <input 
                        type="text" 
                        placeholder="Title"
                        value={this.state.title}
                        name="title"
                        onChange={this.handleOnChange} /><br/>
                    <input
                        type="text"
                        placeholder="Text"
                        value={this.state.content} 
                        name="content"
                        onChange={this.handleOnChange} /><br/>
                    <input
                        type="text"
                        placeholder="Copy/Paste your image URL here."
                        value={this.state.image_url} 
                        name="image_url"
                        onChange={this.handleOnChange} /><br/>
                    <input
                        type="text"
                        placeholder="user id"
                        value={this.state.user_id} 
                        name="user_id"
                        onChange={this.handleOnChange} /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addPost})(PostInput);