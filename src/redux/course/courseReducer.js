import {GET_COURSE, GET_COURSE_DETAIL, RESET_COURSE} from "./courseType";

const initialState = {
    courses: [],
    courseDetail: {}
}

const courseReducer = (state = initialState, action) => {
    switch (action && action.type) {
        case GET_COURSE:
            return {
                ...state,
                courses: action.courses
            }
        case GET_COURSE_DETAIL:
            return {
                ...state,
                courseDetail: action.courseDetail
            }
        case RESET_COURSE:
            return initialState
        default:
            return state
    }
}

export default courseReducer
