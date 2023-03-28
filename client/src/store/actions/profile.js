import api from '../../utils/api';
import { setAlert } from '../actions/alert';
import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  ADD_LINK,
  ADD_LINK_ERROR,
  GET_PROFILE_BY_PARAMS
} from '../types';
// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get(`/v2/profile/me`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    dispatch(setAlert(err.response.data.msg))
  }
};
//Get profile with params
export const getProfileByParams = (username) => async (dispatch) => {
  try {
    const res = await api.get(`/v2/profile/getProfileByParams/${username}` , );
    dispatch({
      type: GET_PROFILE_BY_PARAMS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }
};
//G
// add links to the profile
export const addLinks = (formData) => async (dispatch) => {
  try {
    const res = await api.post(`/v2/profile/add_link` ,formData);
    dispatch({
      type: ADD_LINK,
      payload: res.data
    });
    dispatch(setAlert('Link added'))
  } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
      }
    dispatch({
      type: ADD_LINK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Link
export const deleteLink = (index) => async (dispatch) => {
  try {
    await api.delete(`/v2/profile/delete_link/${index}`);
    dispatch(setAlert('Link deleted'))
  } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
      }
  }
};

// export const getProfiles = () => async (dispatch) => {
//   dispatch({ type: CLEAR_PROFILE });

//   try {
//     const res = await api.get('/profile');

//     dispatch({
//       type: GET_PROFILES,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Get profile by ID
export const getProfileByUserName = (username) => async (dispatch) => {
  try {
    const res = await api.get(`/v2/profile/user/${username}`);
    
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile =
  (data, navigate, edit=false, username) =>
  async (dispatch) => {
    try {      
      // const res = await api.post('/v2/upload', data);
      const res = await axios.post('/api/v2/profile', data,{
        header : {
          'Content-Type': '*'
        }
      });
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });

      dispatch(
        setAlert(edit ? 'Profile Updated' : 'Profile Created')
      );
      navigate(`/${username}`);
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
