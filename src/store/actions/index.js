// eslint-disable-next-line import/no-unresolved
import { getData } from '@api/get-data';

import {
  GET_STORY_LIST_LOADING,
  GET_STORY_LIST_SUCCESS,
  GET_STORY_LIST_ERROR,
  RESTORE_STORY_LIST,
} from './types';

export const getStoryListSteps = {
  request: () => ({
    type: GET_STORY_LIST_LOADING,
  }),
  success: (payload) => ({
    type: GET_STORY_LIST_SUCCESS,
    payload,
  }),
  error: (error) => ({
    type: GET_STORY_LIST_ERROR,
    payload: error,
  }),
};

export const getStoryListAction = (payload) => (dispatch) => {
  getData(dispatch, getStoryListSteps, {
    method: `/search_by_date?query=${payload.query}&page=${payload.page}`,
  });
};

export const restoreStoryListAction = () => ({
  type: RESTORE_STORY_LIST,
});
