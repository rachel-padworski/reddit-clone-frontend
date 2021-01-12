import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from './CardComponent';

//renders a list of all posts
//functional components have to pass props in as the argument instead of this.props 
class Posts extends React.Component {
    
    // everything we need from the component comes from postContainer
    // state = {
    //     likes: 0
    // }

    // handleOnChange = (event) => {
    //     let counts = this.state.likes + 1
    //     this.setState({
    //         likes: counts
    //     })
    // }
    // incrementLikes = () => {
    //     let counts = this.state.likes + 1
    //     this.setState({
    //         likes: counts
    //     })
    // }
    
    render() {
        return (
            <>
            <div>
                {this.props.posts && this.props.posts.map(post => 
                    <div key={post.id} className="card">
                        <Link to={`/posts/${post.id}`} className="post-links">
                            <img src={post.image_url} alt={post.title} /><br/>
                            {post.title}
                        </Link>
                        <div><CardComponent /></div>
                    </div> 
                )}
            </div>
            </>
        )
    }
}


export default Posts;