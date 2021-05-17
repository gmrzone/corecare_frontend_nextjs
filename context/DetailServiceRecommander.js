import { createContext } from 'react';
import useSWR from 'swr';
import BackendApi from '../data/backendApi'

const DetailRecommanderContext = createContext()

const DetailCartRecommanderProvider = ({ children }) => {
    const fetcher = (...args) => BackendApi.get(...args).then(response => response.data)
    const {data, error, mutate: mutateDetailRecommander} = useSWR('services/get-recommandation/detail/', fetcher)
    const detailRecommandation = typeof data === "number" ? [data] : data
    const loading = !error && !detailRecommandation

    return (
        <DetailRecommanderContext.Provider value={{ detailRecommandation, mutateDetailRecommander, loading }}>
            {children}
        </DetailRecommanderContext.Provider>
        )
}

export { DetailRecommanderContext, DetailCartRecommanderProvider }