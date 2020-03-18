import { combineReducers } from "redux";
import userReducer from './userReducer';
import blankReducer from './blankReducer';


//new
//import authReducer from './authReducer';
//import errorReducer from './errorReducer';

export default combineReducers({
    user: userReducer,
    blank: blankReducer,
    //auth: authReducer,
    //error: errorReducer
});