import { createContext } from 'react'
import useSWR from 'swr'
import backendAPI from '../data/backendApi'

const OrdersContext = createContext()   
const OrderContextProvider = ({ children }) => {
    const fetcher = (...args) => backendAPI.get(...args).then(response => response.data)
    const { data: orders, error } = useSWR("cart/orders/user_order/", fetcher)
    const loading = !orders && !error
    const pending = [];
    const cancelled = [];
    const completed = []
    orders?.forEach(element => {
        if (element.status === "pending"){
            pending.push(element)
        }
        else if (element.status === 'cancelled'){
            cancelled.push(element)
        }
        else if (element.status === 'completed'){
            completed.push(element)
        }
    });
    const menuItems = [
        {   
            'name': 'All',
            'data': orders
        },
        {   
            'name': 'Done',
            'data': completed
        },
        {   
            'name': 'Pending',
            'data': pending
        },
        {
            'name': 'Cancelled',
            'data': cancelled
        }
    ]
    return (
        <OrdersContext.Provider value={{ loading, menuItems }}>
            { children }
        </OrdersContext.Provider>
    )
}

export { OrdersContext, OrderContextProvider }