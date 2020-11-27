import {
  UPDATE_POSTS,
  LIST_POSTS_REQUESTS,
  LIST_POSTS_SUCCESS,
} from "../Constants/postConstants";

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_POSTS_REQUESTS:
      return { ...state, loading: true };
    case LIST_POSTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case UPDATE_POSTS:
      return { ...state, loading: false, data: action.payload };
    default:
      return { ...state };
  }
};
