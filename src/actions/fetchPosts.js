//dispatches to the reducer and updates the redux store

export const fetchPosts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: 'FETCH_POSTS',
            payload: posts
        }))
    }
    
    

}