import {combineReducers} from "redux";
import authReducer from "modules/auth/service/authReducer";

const rootReducer = combineReducers({
    //list of all the reducer you have in the app.
    authReducer
})


export default rootReducer;
