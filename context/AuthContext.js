import { createContext } from 'react';
import useSWR from 'swr';
import axios from '../data/backendApi'
import localStorageObj from '../data/localStorageObj'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const { data: userData, error } = useSWR("get_current_user/", fetcher)
    return (
        <AuthContext.Provider value={ userData, error }>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }