import React from 'react';
import { connect } from 'react-redux';
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../actions/toggleSignup';

const Login = (props) => {

    const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
    const { username, password, passwordConfirmation } = form 
    // destructures the form so we can gain access to username, password, and passwordConfirmation. This way we can clear the store.

    const onSubmit = (event) => {
        event.preventDefault()
        if (signup){
            if (password === passwordConfirmation){
                sendSignup({ username: username, password: password })
            } else {
                alert("Passwords don't match")
            }
        } else {
            sendLogin({ username: username, password: password })
        }
    }

    return (
        <>
        <h3>{ signup ? "Sign up!" : "Login" }</h3>
        <form onSubmit={ onSubmit }>
            <label>
                Username: 
                <input type="text" name="username" placeholder="username" value={username} onChange={handleLoginFormChange} />
            </label><br/>
            <label>
                Password: 
                <input type="password" name="password" placeholder="password" value={password} onChange={handleLoginFormChange} />
            </label><br/>
            { signup && 
            <>
                <label>
                    Password Confirmation: 
                    <input type="password" name="passwordConfirmation" placeholder="password" value={passwordConfirmation} onChange={handleLoginFormChange} />
                </label><br/>
            </>
            }
            <input type="submit" value="Submit" />
        </form>
        <br/>
        <button onClick={toggleSignup}>{signup ? "Login" : "Sign Up"}</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
    signup: state.user.signup,
    form: state.user.loginForm
    }
}

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login);

