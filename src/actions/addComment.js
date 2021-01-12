
export const addComment = (commentData) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
        .then(response => response.json())
        .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
    }
}
