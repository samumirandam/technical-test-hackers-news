import reducer, { initialState } from "../index";

import {
  GET_STORY_LIST_LOADING,
  GET_STORY_LIST_SUCCESS,
  GET_STORY_LIST_ERROR,
} from "@actions/types";

describe("Test for Reducers", () => {
  test("Should return default state", () => {
    expect(reducer({}, "")).toEqual({});
  });
  test("Should return initial state", () => {
    expect(reducer(undefined, "")).toEqual(initialState);
  });

  test("Should get story list loading", () => {
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

  test("Should get story list success", () => {
    const payload = {};
    const action = {
      type: GET_STORY_LIST_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      storyList: {
        ...initialState.storyList,
        isSucces: true,
        data: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get story list error", () => {
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
});
