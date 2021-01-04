import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/fetchPosts';
import Posts from '../components/Posts';
import PostInput from '../components/PostInput'
import Post from '../components/Post';
import Home from '../containers/Home';
import Login from '../components/Login';

class PostsContainer extends React.Component {

    //uses the fetchPosts function
    componentDidMount() {
        this.props.fetchPosts()
    }

// routerProps automatically adds the props in to the props object we're already receiving
// Switch sends the user directly to the path listed. Allows us not to need "exact path". Order of the routes matters
    render() {
        return (
            <>
            <div>
                {this.props.user.id ? 
                <Switch>
                    <Route path='/posts/new' component={PostInput} />
                    <Route path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts} /> } />
                    <Route path='/posts' render={(routerProps) => <Posts {...routerProps} posts={this.props.posts} /> } /> 
                    <Route path='/' component={Home} />
                </Switch>
                :
                <Login />
                }
            </div>
            </>
        )
    }
}

// TO DO: hand posts down to user. I think this state isn't being passed to a user.

//maps state to props
//state is the state from the redux store
const mapStateToProps = state => {
    console.log(state.posts, "what's posts' state")
    console.log(state.user, "what is the user state in msp")
    return {
       posts: state.posts.posts,
       user: state.user
   }
}

//{ fetchPosts } is equivalent to having a mapDispatchToProps function
export default connect(mapStateToProps, { fetchPosts })(PostsContainer);