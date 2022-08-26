/* eslint-disable import/no-unresolved */
import {
  GET_STORY_LIST_LOADING,
  GET_STORY_LIST_SUCCESS,
  GET_STORY_LIST_ERROR,
} from '@actions/types';

export const initialState = {
  storyList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORY_LIST_LOADING: {
      return {
        ...state,
        storyList: {
          ...initialState.storyList,
          isLoading: true,
        },
      };
    }
    case GET_STORY_LIST_SUCCESS: {
      return {
        ...state,
        storyList: {
          ...initialState.storyList,
          isSucces: true,
          data: action.payload,
        },
      };
    }
    case GET_STORY_LIST_ERROR: {
      return {
        ...state,
        storyList: {
          ...initialState.storyList,
          isError: true,
          errorDetail: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
