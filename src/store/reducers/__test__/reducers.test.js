/* eslint-disable import/no-unresolved */
import {
  GET_STORY_LIST_LOADING,
  GET_STORY_LIST_SUCCESS,
  GET_STORY_LIST_ERROR,
  RESTORE_STORY_LIST,
} from '@actions/types';
import reducer, { initialState } from '../index';

describe('Test for Reducers', () => {
  test('Should return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should return initial state', () => {
    expect(reducer(undefined, '')).toEqual(initialState);
  });

  test('Should get story list loading', () => {
    const payload = {};
    const action = {
      type: GET_STORY_LIST_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      storyList: {
        ...initialState.storyList,
        isLoading: true,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get story list success', () => {
    const payload = {
      data: [],
      meta: {},
    };
    const action = {
      type: GET_STORY_LIST_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      storyList: {
        ...initialState.storyList,
        isSucces: true,
        data: payload.data,
        meta: payload.meta,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get story list error', () => {
    const payload = {};
    const action = {
      type: GET_STORY_LIST_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      storyList: {
        ...initialState.storyList,
        isError: true,
        errorDetail: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should restore story list', () => {
    const action = {
      type: RESTORE_STORY_LIST,
    };
    const expected = {
      ...initialState,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
