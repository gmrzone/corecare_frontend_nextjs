import { createContext } from "react";
import useSWR from "swr";
import axios from '../data/backendApi'


const DetailCartContext = createContext()

const DetailCartProvider = ({ children }) => {
    const {data: detailCart, error: detailCartError, mutate: detailCartMutate} = useSWR('cart/get/detail/', (...args) => axios.get(...args).then(response => response.data))
    return (
        <DetailCartContext.Provider value={{ detailCart, detailCartError, detailCartMutate }}>
            {children}
        </DetailCartContext.Provider>
    )
} 

export { DetailCartContext, DetailCartProvider }