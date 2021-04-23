import axios from "axios"
import localStorageObj from './localStorageObj'
axios.defaults.withCredentials = true;


axios.interceptors.request.use(config => {
    config.baseURL = "https://www.afzalsaiyed.corecare.in";
    const token = localStorageObj._getAccessToken()
    if (token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, error => {
    Promise.reject(error)
})



export default axios
