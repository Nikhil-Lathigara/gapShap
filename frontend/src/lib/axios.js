import axios from "axios";
export const  axiosInstance=axios.create({
    baseURL:import.meta.env.MODE==="development"?"http://localhost:5001/api":"https://gapshap-1-alqg.onrender.com/api",
    withCredentials:true,
})