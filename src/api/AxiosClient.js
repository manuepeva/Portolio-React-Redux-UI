import axios from "axios";

const axiosClient = axios.create({
  // baseURL: 'https://agile-chamber-44229.herokuapp.com',
  baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosClient;