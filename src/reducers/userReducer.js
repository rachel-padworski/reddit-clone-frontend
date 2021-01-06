const initialLoginForm = {
    username: "",
    password: "",
    passwordConfirmation: ""
}

const initialState = {
    id: null,
    username: null,
    signup: false,
    loginForm: initialLoginForm
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        case "LOGIN_FORM_CHANGE":
            return {...state, loginForm: {
                ...state.loginForm,
                // if payload's name is "username", this will update the username key in the loginForm in state with the new payload value
                [action.payload.name]: action.payload.value
            }}
        case "SET_USER":
            return {...state, ...action.payload.user}
        // case 'CLEAR_CURRENT_USER':
        //     return null
        // case 'BEGIN_AUTH':   
        //     return { ...state, authComplete: false }
        // case 'COMPLETE_AUTH': 
        //     return { ...state, authComplete: true }
        default:
            return {...state};
    }
}
    

export default userReducer;