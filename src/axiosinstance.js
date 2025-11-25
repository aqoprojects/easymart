import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosinstance = axios.create(
 {baseURL: baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
 } 
)

export default axiosinstance;