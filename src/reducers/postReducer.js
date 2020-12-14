// takes in the previous state and updates the state according the action type
function postReducer(state = { posts: [] }, action) {
    switch(action.type) {
        case 'FETCH_POSTS':
            return {
                posts: action.payload
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
                // returning the original state of posts and the new post.
            }
        default:
            return state;
    }
}
    

export default postReducer;