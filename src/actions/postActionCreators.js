//dispatches to the reducer and updates the redux store

export const fetchPosts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: 'FETCH_POSTS',
            payload: posts
        }))
        .catch(console.log)
    }   
}

export const setSelectedPost = (id) => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/posts/${id}`)
        .then(res => res.json())
        .then(post => dispatch({
            type: "SET_SELECTED_POST",
            payload: post
        }))
    }
}

export const addPost = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(post => dispatch({type: 'ADD_POST', payload: post}))
    }
}