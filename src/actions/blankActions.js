import axios from 'axios';
import {
    GET_BLANKS, ADD_BLANK, DELETE_BLANK, BLANKS_LOADING, UPDATE_BLANK
} from './types';

export const getBlanks = () => dispatch => {
    dispatch(setBlanksLoading());
    axios.get('http://localhost:5000/stock/')
    .then(res => dispatch({
        type: GET_BLANKS,
        payload: res.data
    })
    );
};

export const addBlank = (blank) => dispatch => {
    axios.post('http://localhost:5000/stock/add', blank)
    .then(res => dispatch({
        type: ADD_BLANK,
        payload: res.data
    })
    );
};

export const deleteBlank = (id) => dispatch => {
    axios.delete('http://localhost:5000/stock/:id')
    .then(res => dispatch({
        type: DELETE_BLANK,
        payload: id
    })
    );
};

export const setBlanksLoading = () =>{
    return{
        type: BLANKS_LOADING
    };
};