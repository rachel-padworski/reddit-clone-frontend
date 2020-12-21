export const editComment = (content, commentId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments/${commentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .then(post => dispatch({ type: 'UPDATE_COMMENT', payload: post }))
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