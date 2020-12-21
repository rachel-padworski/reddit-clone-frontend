export const login = (credentials) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response => dispatch({ type: 'SET_CURRENT_USER', user: response }))
        .catch(console.log)
    }
}

export const signup = (credentials) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/signup', {
            credentials: "include",    
            headers: {
                'Content Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response=> dispatch({ type: 'SET_CURRENT_USER', user: response }))
        .catch(console.log)
    }
}

export const authUser = () => {
    return (dispatch) => {
        dispatch({ type: 'BEGIN_AUTH' })
        fetch('http://localhost:3000/api/v1/signup', {
            credentials: "include",    
            headers: {
                'Content Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response=> dispatch({ type: 'SET_CURRENT_USER', user: response }))
        .catch(console.log)
    }
}