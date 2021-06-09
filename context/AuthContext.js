import { createContext, useState} from 'react';
import useSWR from 'swr';
import axios from '../data/backendApi'


const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    
    const [shouldFetch, setShouldFetch] = useState(true)

    
    const fetcher = (...args) => axios.get(...args).then(response => response.data).catch(e => {
        if (e.response.status === 401){
            
            setShouldFetch(false)
        }
    })
    const { data: userData, error, mutate: mutateAuth } = useSWR(shouldFetch ? "account/get_current_user/" : null, fetcher, {shouldRetryOnError: false})
    const loginStatus = userData?.number ? true : false
    const loading = !userData && !error && shouldFetch
    return (
        <AuthContext.Provider value={{ userData, error, loginStatus, mutateAuth, setShouldFetch, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }