// import {callApi} from "../../../plugins/callApi";
import {toast} from "react-toastify";
import {parseAxiosError} from '../../../plugins/error'
import {AUTH_LOGIN, AUTH_LOGOUT} from "./authType";

const loginSuccess = (payload) => {
    return {
        type: AUTH_LOGIN,
        payload: payload
    }
}

const logoutSuccess = () => {
    return {
        type: AUTH_LOGOUT
    }
}

export const checkAuthentication = () => (dispatch) => {
    console.log('checking the token')
    try {
        let user = localStorage.getItem("codecourse_logged_user");
        let token = localStorage.getItem("codecourse_access_token");
        console.log('the local has', {user, token})
        if (!user && !token) {
            dispatch(logoutSuccess())
        } else {
            const userDetail = {
                user: JSON.parse(user),
                token: JSON.parse(token)
            };
            dispatch(loginSuccess(userDetail))
        }
    } catch (e) {
        console.log(e)
    }
}

export const postLoginUser = (loginData) => async (dispatch) => {
    try {
        const res = {
            data: {
                user: {
                    id: 1,
                    name: 'Jhon Doe',
                    email: 'random'
                },
                token: "Loremipsumdolorsitamet,consecteturadipisicing elit.Assumenda,nostrum."
            }
        }
        localStorage.setItem('codecourse_logged_user', JSON.stringify(res.data.user))
        localStorage.setItem('codecourse_access_token', JSON.stringify(res.data.token))

        toast.success('Successfully Logged In');
        dispatch(loginSuccess(res.data))
        // const res = await callApi(
        //     {
        //         url: 'auth/login',
        //         method: 'POST',
        //         data: loginData,
        //     }
        // )
        // console.log('the res', {res})
        // if (res && res.status === 200) {
        //     localStorage.setItem('codecourse_logged_user', JSON.stringify(res.data.user))
        //     localStorage.setItem('codecourse_access_token', JSON.stringify(res.data.token))
        //     toast.success('Successfully Logged In');
        //     dispatch(loginSuccess(res.data))
        // }
    } catch (err) {
        const errorCode = parseAxiosError(err)
        toast.error(` Login Failed with, ${errorCode || ""}`)
        dispatch(logoutSuccess())
    }
}

export const logOutUser = () => (dispatch) => {
    localStorage.removeItem('codecourse_logged_user')
    localStorage.removeItem('codecourse_access_token')
    dispatch(logoutSuccess())
}
