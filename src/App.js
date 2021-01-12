import React from 'react';
import PostsContainer from './containers/postsContainer';
import NavBar from './components/NavBar';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
