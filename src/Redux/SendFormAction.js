import axiosClient from "../api/axiosClient";
import { SEND_FORM } from "./types";

export const sendFormData = (data) => async (dispatch) => {
  try {
    const response = await axiosClient.post("/contact", data);
    console.log(data, 'esto es data en action')
    dispatch({
      type: SEND_FORM,
      payload: response.data, 
    });

    return response.data; 
  } catch (error) {
    console.error(error.response || error.message);
  }
};
