import axios from 'axios'

const BASE_URL = "http://localhost:8000/api/"
// const BASE_URL = "https://react-video-app.onrender.com/api/"

export const Axios = axios.create({
    withCredentials: true,
    baseURL:BASE_URL,
    timeout:20000,
    headers: {
        Authorization : `Bearer ${localStorage.getItem("access-token")}`
        }
    
})
