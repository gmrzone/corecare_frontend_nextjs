import axios from "axios"
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken"
axios.defaults.xsrfHeaderName = "X-CSRFToken"

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
import localStorageObj from './localStorageObj'
import { BASE_URL } from '../data/_variables'

// axios.interceptors.request.use(config => {
//     // config.baseURL = "https://www.afzalsaiyed.corecare.in";
//     config.baseURL = BASE_URL
//     const token = localStorageObj._getAccessToken()
//     if (token){
//         config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
// }, error => {
//     Promise.reject(error)
// })


// axios.interceptors.response.use(response => {
//     // console.log(response.config.params)
//     return response
// }, error => {   
//     const originalRequest = error.config
//     // console.log(error.config)
//     console.log(error.response)
//     if (error?.response?.status === 401 && originalRequest.url === "api/token/refresh/"){
//         localStorageObj._clearToken()
//         delete axios.defaults.headers.common["Authorization"]
//         return new Promise((resolve, reject) => {
//             reject(error)
//         })
//     }
//     else if (error?.response?.status === 401 && !originalRequest._retry){
//         originalRequest._retry = true
//         console.log("Access")
//         const refreshToken = localStorageObj._getRefreshToken()
//         return axios.post("api/token/refresh/", {refresh: refreshToken})
//                 .then(response => {
//                     if (response.status === 200){
//                         console.log("Access Update")
//                         localStorageObj._updateAccess(response.data.access)
//                         axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`
//                         return axios(originalRequest)
//                     }
//                 })
//     }
//     return Promise.reject(error)
// })


// // export default axios
// export default axios.create({
//     baseURL: BASE_URL,
//     // baseURL: "http://192.168.0.198:8000",
//     // headers: {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE0OTc1NTk4LCJqdGkiOiJmZTY2M2I4OTI1ZDg0MGEyYTVmZjdlZGZlODFhNjA0NiIsInVzZXJfaWQiOjF9.eWKZ0_gaZGH4UXr831V_a2oEaH2MU8Jzbkt2bnj5BfY"}
// })


axios.interceptors.request.use(config => {

    config.baseURL = BASE_URL
    return config
}, error => {
    Promise.reject(error)
})

export default axios