import {
    UPDATE_POSTS,
    LIST_POSTS_REQUESTS,
    LIST_POSTS_SUCCESS,
  } from "../Constants/postConstants";
//const UPDATE_POSTS = 'UPDATE_POSTS'

export const postUpdate = (data)=>async dispatch =>{
    dispatch({
        type:UPDATE_POSTS,
        payload: data,
    })
}