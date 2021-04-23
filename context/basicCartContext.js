import { createContext } from 'react';
import useSWR from 'swr'
import axios from '../data/backendApi'


const BaseCartContext = createContext()

const BaseCartProvider = ({ children }) => {
    const { data: baseCart, mutate: mutateBaseCart, error: baseCartErrors } = useSWR('cart/get/basic/', (...args) => axios.get(...args).then(response => response.data))
    
    return (
        <BaseCartContext.Provider value={{ baseCart, mutateBaseCart, baseCartErrors }}>
            {children}
        </BaseCartContext.Provider>
    )
}

export { BaseCartContext, BaseCartProvider }