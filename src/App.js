import React from 'react';
import PostsContainer from './containers/PostsContainer'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Reddit Clone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="posts">Posts</Nav.Link>
              <Nav.Link href="posts/new">New Post</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <PostsContainer />
      </div>
    );
  }
}

export default App;
