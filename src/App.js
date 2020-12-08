import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsContainer from './containers/postsContainer'

class App extends React {
  
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/posts/1/comments')
  //     .then(response => response.json())
  //     .then(posts => console.log(posts))
  // }
  
  render() {
    return (
      <div className="App">
        <PostsContainer />
      </div>
    );
  }
}

export default App;
