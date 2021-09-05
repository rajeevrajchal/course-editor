import {callApi} from "../../../plugins/callApi";
import {toast} from "react-toastify";
import {AUTH_LOGIN, AUTH_LOGOUT} from "./authType";

const loggedInUser = (payload) => {
    toast.success('Successfully Logged In');
    return {
        type: AUTH_LOGIN,
        payload: payload
    }
}

const loggedOutUser = () => {
    toast.error('Login Failed');
    return {
        type: AUTH_LOGOUT
    }
}

export const postLoginUser = (loginData) => async (dispatch) => {
    console.log('the login Data', loginData)
    try {
        const res = await callApi(
            {
                url: '/login',
                method: 'POST',
                data: loginData,
            }
        )
        if (res && res.status) {
            dispatch(loggedInUser(res.data))
        } else {
            dispatch(loggedOutUser())
        }
    } catch (e) {
        console.log(e)
        dispatch(loggedOutUser())
    }
}
