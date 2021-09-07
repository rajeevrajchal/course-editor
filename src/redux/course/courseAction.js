import {parseAxiosError} from "../../plugins/error";
import {toast} from "react-toastify";
import {GET_COURSE, RESET_COURSE} from "./courseType";
import {courseJson} from "../../mock-data/course.js";
// import {callApi} from "../../plugins/callApi";

const fetchSuccess = (courses) => {
    return {
        type: GET_COURSE,
        courses: courses
    }
}

const fetchFailed = (errorCode, errorMessage) => {
    toast.error(` ${errorMessage || "Course Fetch Failed"}, ${errorCode || ""}`)
    return {
        type: RESET_COURSE
    }
}

export const getCourses = () => async (dispatch) => {
    try {
        console.log('reach here')
        console.log('the course', courseJson)
        // const res = await callApi(
        //     {
        //         url: 'courses',
        //         method: 'GET',
        //     }
        // )
        // console.log('the res', {res})
        // if (res && res.status === 200) {
        //    dispatch(fetchSuccess(course))
        // }
        dispatch(fetchSuccess(courseJson))
    } catch (err) {
        const errorCode = parseAxiosError(err)
        dispatch(fetchFailed(errorCode, ''))
    }
}
