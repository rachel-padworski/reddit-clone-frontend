
export const addComment = (comment) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(post => dispatch({type: 'ADD_COMMENT', payload: post}))
    }
}
