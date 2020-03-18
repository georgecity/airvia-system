import axios from 'axios';
import {
    GET_COMISSIONS, ADD_COMISSION, DELETE_COMISSION, COMISSIONS_LOADING, UPDATE_COMISSION
} from './types';

export const getComissions = () => dispatch => {
    dispatch(setComissionsLoading());
    axios.get('http://localhost:5000/comission/')
    .then(res => dispatch({
        type: GET_COMISSIONS,
        payload: res.data
    })
    );
};

export const addComission = (comission) => dispatch => {
    axios.post('http://localhost:5000/comission/add', comission)
    .then(res => dispatch({
        type: ADD_COMISSION,
        payload: res.data
    })
    );
};

export const deleteComission = (id) => dispatch => {
    axios.delete('http://localhost:5000/comission/:id')
    .then(res => dispatch({
        type: DELETE_COMISSION,
        payload: id
    })
    );
};

export const setComissionsLoading = () =>{
    return{
        type: COMISSIONS_LOADING
    };
};