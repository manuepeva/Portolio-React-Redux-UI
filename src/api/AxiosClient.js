import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://portfolio-server-ga2jjdg69-manuel-prez-s-projects.vercel.app',
  // baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosClient;