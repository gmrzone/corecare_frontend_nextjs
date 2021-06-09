import { createContext, useState} from 'react';
import useSWR from 'swr';
import axios from '../data/backendApi'


const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    
    // const fetcher = (...args) => axios.get(...args).then(response => response.data).catch(e => {
    //     localStorage !== "undefined" && localStorage?.removeItem('get_user')
    //     console.clear()
    // })
    // const shouldFetch = typeof localStorage !== "undefined" && localStorage?.getItem('access') ? true : false
    // const shouldFetch = typeof localStorage !== "undefined" && localStorage?.getItem('get_user') ? true : false
    // const { data: userData, error, mutate: mutateAuth } = useSWR(shouldFetch ? "get_current_user/" : null, fetcher)
    // const getCookie = (name) => {
    const [shouldFetch, setShouldFetch] = useState(true)
    // function getCookie(name) {
    //     let cookieValue = null;
    //     if (process.browser){
    //         if (document.cookie && document.cookie !== '') {
    //             const cookies = document.cookie.split(';');
    //             for (let i = 0; i < cookies.length; i++) {
    //                 const cookie = cookies[i].trim();
    //                 // Does this cookie string begin with the name we want?
    //                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                     break;
    //                 }
    //             }
    //         }
    //     }

    //     return cookieValue;
    // }
    const fetcher = (...args) => axios.get(...args).then(response => response.data).catch(e => {
        if (e.response.status === 401){
            console.clear()
            setShouldFetch(false)
        }
    })
    const { data: userData, error, mutate: mutateAuth } = useSWR(shouldFetch ? "account/get_current_user/" : null, fetcher, {shouldRetryOnError: false})
    const loginStatus = userData?.number ? true : false
    return (
        <AuthContext.Provider value={{ userData, error, loginStatus, mutateAuth, setShouldFetch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }