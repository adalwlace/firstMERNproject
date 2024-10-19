import axios from "axios";

const axiosInstance= axios.create({
    baseURL:"http://localhost:8000",
})
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken=localStorage.getItem("accessToken");

    if(accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`;
    }
  
  });

export default axiosInstance;