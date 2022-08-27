/* eslint-disable import/no-unresolved */
import {
  GET_STORY_LIST_LOADING,
  GET_STORY_LIST_SUCCESS,
  GET_STORY_LIST_ERROR,
  RESTORE_STORY_LIST,
} from '@actions/types';

export const initialState = {
  storyList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: [],
    meta: null,
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
          data: [...state.storyList.data],
        },
      };
    }
    case GET_STORY_LIST_SUCCESS: {
      return {
        ...state,
        storyList: {
          ...initialState.storyList,
          isSucces: true,
          data: [...state.storyList.data, ...action.payload.data],
          meta: action.payload.meta,
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
    case RESTORE_STORY_LIST: {
      return {
        ...state,
        storyList: {
          ...initialState.storyList,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
