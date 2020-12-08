// takes in the previous state and updates the state according the action type
function postReducer(state = { posts: [] }, action) {
        // switch(action.type) {
        //     case 'LOADING_POSTS':
        //         return {
        //             ...state,
        //             posts: [...state.posts],
        //             loading: true 
        //         }
        //     case 'ADD_POST':
        //         return {
        //             ...state,
        //             posts: action.posts,
        //             loading: false
        //         }
            // default:
                return state;
}
    

export default postReducer;