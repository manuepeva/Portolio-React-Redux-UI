import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'https://agile-chamber-44229.herokuapp.com',
});
