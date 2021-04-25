import axios from "axios"
axios.defaults.withCredentials = true;
import localStorageObj from './localStorageObj'
import { BASE_URL } from '../data/_variables'

axios.interceptors.request.use(config => {
    // config.baseURL = "https://www.afzalsaiyed.corecare.in";
    config.baseURL = BASE_URL
    const token = localStorageObj._getAccessToken()
    if (token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, error => {
    Promise.reject(error)
})



export default axios
