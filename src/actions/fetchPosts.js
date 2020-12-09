export const fetchPosts = () => {
    return (dispatch) => {
        // dispatch({ type: 'LOADING_POSTS'})
        fetch('https://localhost3000/api/v1/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: 'FETCH_POSTS',
            payload: posts
        }))
    }
    
    

}