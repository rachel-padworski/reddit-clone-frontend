import React from 'react';

class Posts extends React.Component {
    
    // everything we need from the component comes from postContainer
    state = {
        likes: 0
    }

    // handleOnChange = (event) => {
    //     console.log("handleonchange")
    //     let counts = this.state.likes + 1
    //     this.setState({
    //         likes: counts
    //     })
    // }
    incrementLikes = () => {
        let counts = this.state.likes + 1
        this.setState({
            likes: counts
        })
    }
    
    render() {
        return (
            <>
                <div>
                    <button className="like-button" onClick={this.incrementLikes}>Like {this.state.likes}</button>
                </div>
            </>
        )
    }
}
export default Posts;
