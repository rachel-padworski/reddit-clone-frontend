
export const fetchPost = (postId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/posts/${postId}`)
        .then(res => res.json())
        .then(posts => dispatch({
            type: 'FETCH_POST',
            payload: post
        }))
        .catch(console.log)
    }   
}