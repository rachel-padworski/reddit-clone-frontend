// takes in the previous state and updates the state according to the action type
function postReducer(state = { posts: [] }, action) {
    switch(action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
                // returning the original state of posts and the new post.
            }
        case 'ADD_COMMENT':
            let posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post 
                }
            })    
            return { ...state, posts: posts }
        case 'EDIT_COMMENT':
            let postsTwo = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post 
                }
            })    
            console.log(postsTwo, "edit comment in postReducer")
            return { ...state, posts: postsTwo }    
        case 'DELETE_COMMENT':
            let postsThree = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post 
                }
            })    
            return { ...state, posts: postsThree }
        default:
            return state;
    }
}
    

export default postReducer;