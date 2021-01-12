
const addPost = (data) => {
    console.log(5)
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
        .then(post => {
            console.log(6)
            return dispatch({type: 'ADD_POST', payload: post})
        })
            console.log(7)
    }
}

export default addPost;