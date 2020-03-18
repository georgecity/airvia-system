import { GET_BLANKS, ADD_BLANK, DELETE_BLANK, BLANKS_LOADING } from "../actions/types";


const initialState = {
    blanks: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type){
        case GET_BLANKS: 
            return{
                ...state,
                blanks: action.payload,
                loading: false
            };
        case DELETE_BLANK:
            return{
                ...state,
                blanks: state.blanks.filter(blank => blank.id !== action.payload)
            };
        case ADD_BLANK:
            return{
                ...state,
                blanks: [action.payload, ...state.blanks]
            };
            case BLANKS_LOADING:
            return{
                ...state,
                loading:  true
            };
        default:
            return state;
    }

}