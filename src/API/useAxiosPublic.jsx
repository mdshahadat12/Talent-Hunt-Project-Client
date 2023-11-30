import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://talent-hunt-server.vercel.app/'
  });
const useAxiosSecure = () =>{
    return axiosSecure;
}

export default useAxiosSecure;