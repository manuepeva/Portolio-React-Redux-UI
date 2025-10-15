import axiosClient from "../api/AxiosClient.js";
import { SEND_FORM } from "./types";

export const sendFormData = (data) => async (dispatch) => {
  try {
    const response = await axiosClient.post("/contact", data);
    dispatch({
      type: SEND_FORM,
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error.response || error.message);
  }
};
