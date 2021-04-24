import { createContext } from 'react';
import useSWR from 'swr'
import axios from '../data/backendApi'


const BaseCartContext = createContext()

const BaseCartProvider = ({ children }) => {
    const { data: baseCart, mutate: mutateBaseCart, error: baseCartErrors } = useSWR('cart/get/basic/', (...args) => axios.get(...args).then(response => response.data))
    const test = typeof baseCart === 'object' ? Reflect.ownKeys(baseCart).map(x => baseCart[x]['quantity']) : null
    const cartCount = test?.length > 0 ? test.reduce((x, y) => x + y) : 0
    return (
        <BaseCartContext.Provider value={{ baseCart: typeof baseCart === "object" ? baseCart : {}, mutateBaseCart, baseCartErrors, cartCount }}>
            {children}
        </BaseCartContext.Provider>
    )
}

export { BaseCartContext, BaseCartProvider }