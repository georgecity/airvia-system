import axios from 'axios';
import {
    GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING, UPDATE_USER
} from './types';

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios.get('http://localhost:5000/users/')
    .then(res => dispatch({
        type: GET_USERS,
        payload: res.data
    })
    );
};

export const addUser = (user) => dispatch => {
    axios.post('http://localhost:5000/users/register', user)
    .then(res => dispatch({
        type: ADD_USER,
        payload: res.data
    })
    );
};

export const deleteUser = (id) => dispatch => {
    axios.delete('http://localhost:5000/users/:id')
    .then(res => dispatch({
        type: DELETE_USER,
        payload: id
    })
    );
};

export const setUsersLoading = () =>{
    return{
        type: USERS_LOADING
    };
};