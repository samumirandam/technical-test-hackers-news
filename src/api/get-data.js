import axiosInstance from "./config";

export const getData = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const response = await axiosInstance.get(payload.method);
    dispatch(steps.success(response));
  } catch (error) {
    dispatch(steps.error(error.message));
  }
};
