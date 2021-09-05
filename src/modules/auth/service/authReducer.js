import {AUTH_LOGIN, AUTH_LOGOUT} from "./authType";

const initialState = {
    loggedIn: false,
    accessToken: '',
    loginInUser: {}
}

const authReducer = (state = initialState, action) => {
    switch (action && action.type) {
        case AUTH_LOGIN:
            localStorage.setItem('codecourse_logged_user', JSON.stringify(action && action.payload.loginInUser))
            localStorage.setItem('codecourse_access_token', JSON.stringify(action && action.payload.accessToken))
            return {
                ...state,
                loginInUser: action && action.payload.loginInUser,
                accessToken: action && action.payload.accessToken,
                loggedIn: true
            }
        case AUTH_LOGOUT:
            localStorage.removeItem('codecourse_logged_user')
            localStorage.removeItem('codecourse_access_token')
            return initialState
        default:
            return state
    }
}

export default authReducer()
