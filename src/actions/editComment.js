export const editComment = (commentId) => {
    console.log(commentId, "editComment fetch")
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments/${commentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentId)
        })
        .then(response => response.json())
        .then(comment => dispatch({ type: 'UPDATE_COMMENT', payload: comment }))
    }
}

export const deleteComment = (commentId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments/${commentId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(post => dispatch({ type: 'DELETE_COMMENT', payload: post }))
    }
}