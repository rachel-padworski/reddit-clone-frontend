export const selectedPost = (post) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECTED_POST',
            payload: post
        })
    }   
}