import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Home extends React.Component {

    // add a componentDidMount() to get the currentuser()

    render() {
        return(
            <>
                <Header />
            </>
        )
    }

    // mapStateToProps currentUser: state.currentUser

}

export default connect()(Home);