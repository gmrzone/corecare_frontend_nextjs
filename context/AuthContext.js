import { createContext, useEffect } from 'react';
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
    const getCookie = (name) => {

        if (process.browser){
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
        }

        return null;
    }
    const shouldFetch = getCookie('get_user') ? true : false
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const { data: userData, error, mutate: mutateAuth } = useSWR(shouldFetch ? "get_current_user/" : null, fetcher, {shouldRetryOnError: false})
    const loginStatus = userData?.number ? true : false
    return (
        <AuthContext.Provider value={{ userData, error, loginStatus, mutateAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }