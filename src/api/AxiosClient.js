import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://portfolio-server-hddu.onrender.com",
  // baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosClient;
