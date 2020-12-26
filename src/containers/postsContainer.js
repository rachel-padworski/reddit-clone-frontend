import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/fetchPosts';
import Posts from '../components/Posts';
import PostInput from '../components/PostInput'
import Post from '../components/Post';
import Home from '../containers/Home';

class PostsContainer extends React.Component {

    //uses the fetchPosts function
    componentDidMount() {
        this.props.fetchPosts()
    }

// routerProps automatically adds the props in to the props object we're already receiving
// Switch sends the user directly to the path listed. Allows us not to need "exact path". Order of the routes matters
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/posts/new' component={PostInput} />
                    <Route path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts} /> } />
                    <Route path='/posts' render={(routerProps) => <Posts {...routerProps} posts={this.props.posts} /> } /> 
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        )
    }
}

//maps state to props
//state is the state from the redux store
const mapStateToProps = state => {
    console.log(state, "mapStateToProps")
   return {
       posts: state.postReducer.posts
   }
}

//{ fetchPosts } is equivalent to having a mapDispatchToProps function
export default connect(mapStateToProps, { fetchPosts })(PostsContainer);