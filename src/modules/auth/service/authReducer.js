import {AUTH_LOGIN, AUTH_LOGOUT} from "./authType";

const initialState = {
    loggedIn: false,
    accessToken: '',
    loginInUser: {}
}

const authReducer = (state = initialState, action) => {
    switch (action && action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                loginInUser: action && action.payload.user,
                accessToken: action && action.payload.token,
                loggedIn: true
            }
        case AUTH_LOGOUT:
            return initialState
        default:
            return state
    }
}

export default authReducer
