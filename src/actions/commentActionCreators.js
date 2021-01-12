
export const commentFormChange = (e) => ({
    type: "COMMENT_FORM_CHANGE",
    payload: { name: e.target.name, value: e.target.value }
})

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

export const editComment = (comment) => {
    console.log(comment, "edit fetch")
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
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
