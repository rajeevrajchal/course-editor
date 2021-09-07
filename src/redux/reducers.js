import {combineReducers} from "redux";
import authReducer from "modules/auth/service/authReducer";
import courseReducer from "./course/courseReducer";

const rootReducer = combineReducers({
    //list of all the reducer you have in the app.
    authReducer,
    courseReducer
})


export default rootReducer;
