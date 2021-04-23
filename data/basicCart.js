import useSWR from 'swr'
import BackendApi from './backendApi'
const BasicCart = () => {
    const fetcher = (...args) => BackendApi.get(...args).then(response => response.data)
    const {data: baseCart, error, mutate: mutateCart } = useSWR('get_current_user/', fetcher)
    
    return {
        baseCart,
        error,
        mutateCart
    }
}

export default BasicCart