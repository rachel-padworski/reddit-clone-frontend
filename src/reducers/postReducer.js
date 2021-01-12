// takes in the previous state and updates the state according to the action type
const nullPost = {
    id: null,
    title: "",
    content: "",
    image_url: "",
    user_id: "",
    comments: []
}

const initialState = {
    posts: [],
    selectedPost: nullPost
}

function postReducer(state = initialState, action) {
    console.log(8)
    switch(action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.payload,
                selectedPost: state.selectedPost
            }
        case 'SELECTED_POST':
            localStorage.selectedPost=action.payload
            return {
                ...state,
                selectedPost: action.payload
            }
        case 'ADD_POST':
            console.log(9)
            return {
                ...state,
                posts: [...state.posts, action.payload]
                // returning the original state of posts and the new post.
            }
        case 'ADD_COMMENT':
            // this finds the id of the post
            let posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    // ...post.comments, action.payload
                    return {...post, comments: [...post.comments, action.payload]} //this is the new comment
                } else {
                    return post 
                }
            })    
            let selectedPost = {...state.selectedPost, comments: [...state.selectedPost.comments, action.payload]}
            return { ...state, posts: posts, selectedPost: selectedPost }
        case 'EDIT_COMMENT':
            let postsTwo = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post 
                }
            })    
            return { ...state, selectedPost: action.payload, posts: postsTwo }    
        case 'DELETE_COMMENT':
            let postsToo = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })    
            return { ...state, selectedPost: action.payload, posts: postsToo}
        default:
            return state;
    }
}
    

export default postReducer;