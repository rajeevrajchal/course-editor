/*
    List of all the actions that need to export globally,
    otherwise you can make you action on same module it reside.
*/

export {
    checkAuthentication,
    logOutUser
} from '../modules/auth/service/authAction'

export {
    getCourses
} from './course/courseAction'
