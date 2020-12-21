
export const addComment = (comment) => {
    console.log(comment)
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
// needed to get back the post associated with the comment instead of the comment itself. this is changed in the backend too.