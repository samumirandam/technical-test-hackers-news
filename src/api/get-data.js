/* eslint-disable import/no-unresolved */
import { parseData } from '@utils/parse-data';

import axiosInstance from './config';

// eslint-disable-next-line import/prefer-default-export
export const getData = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const response = await axiosInstance.get(payload.method);
    dispatch(steps.success(parseData(response)));
  } catch (error) {
    dispatch(steps.error(error.message));
  }
};
