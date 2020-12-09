import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/fetchPosts';
import Posts from '../components/Posts';
import PostInput from '../components/PostInput'

class PostsContainer extends React.Component {

    //uses the fetchPosts function
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <PostInput />
                <Posts posts={this.props.posts} />
            </div>
        )
    }

}

//to see it, we want to map the state to props. 
//state is the state from the redux store
const mapStateToProps = state => {
   return {
       posts: state.posts
   }
}

//{ fetchPosts } is equivalent to having a mapDispatchToProps function
export default connect(mapStateToProps, { fetchPosts })(PostsContainer);