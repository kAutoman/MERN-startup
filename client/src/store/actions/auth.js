import api from '../../utils/api'
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';
// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/v2/auth');
    
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/v2/users/', formData);
    let {username} = res.data;
      window.location.href = `/${username}`;
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert("Registered Successfully"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (data) => async (dispatch) => {
  try {
    const res = await api.post('/v2/auth', data);
    const {success, username} =  res.data;
    if(success){
      dispatch(setAlert("Logged In"));      
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
      window.location.href = `/${username}`;
    }
    

    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
