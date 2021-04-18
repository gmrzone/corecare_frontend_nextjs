import axios from "axios"
import localStorageObj from './localStorageObj'
axios.defaults.withCredentials = true;


axios.interceptors.request.use(config => {
    config.baseURL = "https://www.afzalsaiyed.corecare.in";
    return config
}, error => {
    Promise.reject(error)
})

// axios.interceptors.response.use(response => {

// })

export default axios
