import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://portfolio-server-7uo36pjh3-manuel-prez-s-projects.vercel.app/api',
  // baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosClient;