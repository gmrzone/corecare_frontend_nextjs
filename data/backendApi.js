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


axios.interceptors.response.use(response => {
    // console.log(response.config.params)
    return response
}, error => {   
    const originalRequest = error.config
    // console.log(error.config)

    if (error.response.status === 401 && originalRequest.url === "api/token/refresh/"){
        localStorageObj._clearToken()
        console.log("Refresh")
        delete axios.defaults.headers.common["Authorization"]
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
    else if (error.response.status === 401 && !originalRequest._retry){
        originalRequest._retry = true
        console.log("Access")
        const refreshToken = localStorageObj._getRefreshToken()
        return axios.post("api/token/refresh/", {refresh: refreshToken})
                .then(response => {
                    if (response.status === 200){
                        console.log("Access Update")
                        localStorageObj._updateAccess(response.data.access)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`
                        return axios(originalRequest)
                    }
                })
    }
    return Promise.reject(error)
})


export default axios
