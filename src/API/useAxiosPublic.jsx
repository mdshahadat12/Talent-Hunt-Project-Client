import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://localhost/'
  });
const useAxiosSecure = () =>{
    return axiosSecure;
}

export default useAxiosSecure;