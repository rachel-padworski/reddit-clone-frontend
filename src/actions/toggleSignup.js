export const toggleSignup = () => ({
    type: "TOGGLE_SIGNUP"
})   

export const handleLoginFormChange = (event) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: { name: event.target.name, value: event.target.value}
})

export const sendSignup = (userData) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(response => {
            localStorage.token = response.token
            dispatch({
            type: "SET_USER",
            payload: {
                user: response.user
            }
            })
        })
    }
}

export const sendLogin = (userData) => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(response => {
            localStorage.token = response.token
            dispatch({
            type: "SET_USER",
            payload: { user: response.user }
            })
        })
    }
}

export const autoLogin = () => {
    return dispatch => {
        fetch("http://localhost:3000/api/v1/autologin", {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
            },
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
            type: "SET_USER",
            payload: {user: response.user}
            })
        })
        .catch(error => console.log(error, "error from autoLogin fetch"))
    }
}