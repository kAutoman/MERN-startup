import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    GET_REPOS,
    NO_REPOS,
    GET_PROFILE_BY_PARAMS
  } from '../types';
  
  const initialState = {
    profile: null,
    other_profile : null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
  };
  
  function profileReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
        return{
          ...state,
          profile : payload
        }
      case UPDATE_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false
        };
      case GET_PROFILES:
        return {
          ...state,
          profiles: payload,
          loading: false
        };
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profile: null
        };
      case GET_PROFILE_BY_PARAMS: 
        return {
          ...state,
          other_profile : payload
        }
      
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          repos: []
        };
      case GET_REPOS:
        return {
          ...state,
          repos: payload,
          loading: false
        };
      case NO_REPOS:
        return {
          ...state,
          repos: []
        };
      default:
        return state;
    }
  }
  
  export default profileReducer;
  