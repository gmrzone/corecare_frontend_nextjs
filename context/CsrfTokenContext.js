import { createContext } from 'react';
import useSWR from 'swr';
import backendApi from '../data/backendApi';

const CsrfContext = createContext()

const CsrfContextProvider = ({ children }) => {
    const fetcher = (...args) => backendApi(...args).then(response => response.headers['x-csrftoken'])
    const {data: csrfToken, mutate: mutateCsrf} = useSWR('account/get_csrf/', fetcher)
    return (
        <CsrfContext.Provider value={{ csrfToken, mutateCsrf }}>
            {children}
        </CsrfContext.Provider>
    )
}

export { CsrfContext, CsrfContextProvider }