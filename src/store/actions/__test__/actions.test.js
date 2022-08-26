import * as actions from "../index";

import {
  GET_STORY_LIST_LOADING,
  GET_STORY_LIST_SUCCESS,
  GET_STORY_LIST_ERROR,
} from "../types";

describe("Test for Actions", () => {
  test("Should call getStoryListSteps request", () => {
    const expected = {
      type: GET_STORY_LIST_LOADING,
    };
    expect(actions.getStoryListSteps.request()).toEqual(expected);
  });

  test("Should call getStoryListSteps success", () => {
    const payload = {
      data: true,
    };
    const expected = {
      type: GET_STORY_LIST_SUCCESS,
      payload: payload.data,
    };
    expect(actions.getStoryListSteps.success(payload)).toEqual(expected);
  });

  test("Should call getStoryListSteps error", () => {
    const payload = "test";
    const expected = {
      type: GET_STORY_LIST_ERROR,
      payload: payload,
    };
    expect(actions.getStoryListSteps.error(payload)).toEqual(expected);
  });

  test("Should call getStoryListAction with limit", () => {
    const payload = {};
    const dispatch = jest.fn();
    actions.getStoryListAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
