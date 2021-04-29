import { createContext, useEffect } from 'react';
import useSWR from 'swr';
import axios from '../data/backendApi'
import localStorageObj from '../data/localStorageObj'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const shouldFetch = typeof localStorage !== "undefined" && localStorage?.getItem('access') ? true : false
    const { data: userData, error, mutate: mutateAuth } = useSWR(shouldFetch ? "get_current_user/" : null, fetcher)
    const loginStatus = userData?.number ? true : false
    return (
        <AuthContext.Provider value={{ userData, error, loginStatus, mutateAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }