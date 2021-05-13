import { createContext } from 'react';
import useSWR from 'swr';
import backendApi from '../data/backendApi'
const BasicServiceRecommanderContext = createContext();

const BasicServiceRecommanderProvider = ({ children }) => {
    const fetcher = (...args) => backendApi.get(...args).then(response => response.data)
    const { data: basicRecommandation, mutate } = useSWR('services/get-recommandation/basic/', fetcher)
    return (
        <BasicServiceRecommanderContext.Provider value={{basicRecommandation, mutate}}>
            {children}
        </BasicServiceRecommanderContext.Provider>
    )
}

export { BasicServiceRecommanderContext, BasicServiceRecommanderProvider };