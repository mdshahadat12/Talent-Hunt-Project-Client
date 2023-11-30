import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://talent-hunt-server.vercel.app/',
    withCredentials:true
  });

export default axiosSecure;